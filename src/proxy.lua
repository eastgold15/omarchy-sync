-- 只把核对过的代理变量交给 git、gh 和 mise。
-- 规则与 lib/proxy.sh 一致:名字限于代理变量,值必须是普通 URL 或 no_proxy 列表。

local M = {}

local PROXY_NAMES = {
  "http_proxy", "https_proxy", "all_proxy", "no_proxy",
  "HTTP_PROXY", "HTTPS_PROXY", "ALL_PROXY", "NO_PROXY",
}

local function has_forbidden(value)
  return value:find("$", 1, true)
    or value:find("`", 1, true)
    or value:find('"', 1, true)
    or value:find("'", 1, true)
    or value:find("\n", 1, true)
    or value:find("\r", 1, true)
    or value:find(" ", 1, true)
    or value:find("..", 1, true)
end

local function body_ok(rest)
  if rest == "" then return false end
  for i = 1, #rest do
    local c = rest:sub(i, i)
    if not c:match("[A-Za-z0-9._~:/?#@%%+-]") and c ~= "[" and c ~= "]" then
      return false
    end
  end
  return true
end

function M.url_ok(value)
  if type(value) ~= "string" or value == "" or #value > 256 then return false end
  if has_forbidden(value) then return false end
  local rest = value:match("^https://(.+)$")
    or value:match("^http://(.+)$")
    or value:match("^socks5h://(.+)$")
    or value:match("^socks5://(.+)$")
    or value:match("^socks4://(.+)$")
  if not rest then return false end
  return body_ok(rest)
end

function M.bypass_ok(value)
  if type(value) ~= "string" or value == "" or #value > 512 then return false end
  if value:find("\n", 1, true) or value:find("\r", 1, true) or value:find(" ", 1, true) then
    return false
  end
  return value:match("^[A-Za-z0-9.*:,_/%-]+$") ~= nil
end

function M.value_ok(name, value)
  if name == "no_proxy" or name == "NO_PROXY" then
    return M.bypass_ok(value)
  end
  if name == "http_proxy" or name == "https_proxy" or name == "all_proxy"
    or name == "HTTP_PROXY" or name == "HTTPS_PROXY" or name == "ALL_PROXY" then
    return M.url_ok(value)
  end
  return false
end

-- 返回可以放进 env -i 的 "name=value" 列表
function M.assignments()
  local out = {}
  for _, name in ipairs(PROXY_NAMES) do
    local value = os.getenv(name)
    if value and M.value_ok(name, value) then
      out[#out + 1] = name .. "=" .. value
    end
  end
  return out
end

return M
