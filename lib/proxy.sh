# Forward only a checked proxy to git and gh. Other tools stay without it.

proxy_url_ok() {
  local value="$1"
  local pattern='^(https?|socks5h?|socks4)://[][A-Za-z0-9._~:/?#@%+-]+$'
  [[ -n $value && ${#value} -le 256 ]] || return 1
  [[ $value != *'$'* && $value != *'`'* && $value != *'"'* && $value != *"'"* ]] || return 1
  [[ $value != *$'\n'* && $value != *$'\r'* && $value != *' '* && $value != *'..'* ]] || return 1
  [[ $value =~ $pattern ]]
}

proxy_bypass_ok() {
  local value="$1"
  local pattern='^[A-Za-z0-9.*:,_/-]+$'
  [[ -n $value && ${#value} -le 512 ]] || return 1
  [[ $value != *$'\n'* && $value != *$'\r'* && $value != *' '* ]] || return 1
  [[ $value =~ $pattern ]]
}

proxy_value_ok() {
  local name="$1"
  local value="$2"
  case "$name" in
    no_proxy|NO_PROXY) proxy_bypass_ok "$value" ;;
    http_proxy|https_proxy|all_proxy|HTTP_PROXY|HTTPS_PROXY|ALL_PROXY) proxy_url_ok "$value" ;;
    *) return 1 ;;
  esac
}

# Print name=value lines for proxy variables that are safe to keep.
proxy_assignments() {
  local name value
  local -a names=(
    http_proxy https_proxy all_proxy no_proxy
    HTTP_PROXY HTTPS_PROXY ALL_PROXY NO_PROXY
  )
  for name in "${names[@]}"; do
    value=${!name-}
    proxy_value_ok "$name" "$value" || continue
    printf '%s=%s\n' "$name" "$value"
  done
}
