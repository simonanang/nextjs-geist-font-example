(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/context/UserContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserProvider": (()=>UserProvider),
    "useUser": (()=>useUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const UserContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useUser = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
_s(useUser, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const UserProvider = ({ children })=>{
    _s1();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserProvider.useEffect": ()=>{
            // Check for existing session on mount
            const savedUser = localStorage.getItem('user');
            if (savedUser) {
                try {
                    setUser(JSON.parse(savedUser));
                } catch (err) {
                    console.error('Error parsing saved user:', err);
                    localStorage.removeItem('user');
                }
            }
        }
    }["UserProvider.useEffect"], []);
    const login = async (email, password)=>{
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (response.ok) {
                const userData = await response.json();
                setUser(userData.user);
                localStorage.setItem('user', JSON.stringify(userData.user));
                return true;
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed');
                return false;
            }
        } catch (err) {
            setError('Network error occurred');
            return false;
        } finally{
            setIsLoading(false);
        }
    };
    const signup = async (email, password, name, role)=>{
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    name,
                    role
                })
            });
            if (response.ok) {
                const userData = await response.json();
                setUser(userData.user);
                localStorage.setItem('user', JSON.stringify(userData.user));
                return true;
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Signup failed');
                return false;
            }
        } catch (err) {
            setError('Network error occurred');
            return false;
        } finally{
            setIsLoading(false);
        }
    };
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem('user');
        setError(null);
    };
    const switchAccountType = async (newRole)=>{
        if (!user) {
            setError('No user logged in');
            return false;
        }
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/auth/switch-role', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: user.id,
                    newRole
                })
            });
            if (response.ok) {
                const updatedUser = {
                    ...user,
                    role: newRole
                };
                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
                return true;
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to switch account type');
                return false;
            }
        } catch (err) {
            setError('Network error occurred');
            return false;
        } finally{
            setIsLoading(false);
        }
    };
    const value = {
        user,
        login,
        logout,
        signup,
        switchAccountType,
        isLoading,
        error
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/UserContext.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
};
_s1(UserProvider, "22Gu3e8oDyYwi96lqvZNC1XHc+U=");
_c = UserProvider;
var _c;
__turbopack_context__.k.register(_c, "UserProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/CurrencyContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CurrencyProvider": (()=>CurrencyProvider),
    "useCurrency": (()=>useCurrency)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const CurrencyContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useCurrency = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CurrencyContext);
    if (context === undefined) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
};
_s(useCurrency, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const CurrencyProvider = ({ children })=>{
    _s1();
    const [selectedCurrency, setSelectedCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('USD');
    const [currencyRates, setCurrencyRates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            code: 'USD',
            name: 'US Dollar',
            rate: 1,
            symbol: '$'
        },
        {
            code: 'EUR',
            name: 'Euro',
            rate: 0.85,
            symbol: '€'
        },
        {
            code: 'GBP',
            name: 'British Pound',
            rate: 0.73,
            symbol: '£'
        },
        {
            code: 'JPY',
            name: 'Japanese Yen',
            rate: 110,
            symbol: '¥'
        },
        {
            code: 'CAD',
            name: 'Canadian Dollar',
            rate: 1.25,
            symbol: 'C$'
        }
    ]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CurrencyProvider.useEffect": ()=>{
            // Load saved currency preference
            const savedCurrency = localStorage.getItem('selectedCurrency');
            if (savedCurrency) {
                setSelectedCurrency(savedCurrency);
            }
        }
    }["CurrencyProvider.useEffect"], []);
    const convertPrice = (priceUSD)=>{
        const rate = currencyRates.find((r)=>r.code === selectedCurrency)?.rate || 1;
        return priceUSD * rate;
    };
    const setCurrency = (currency)=>{
        setSelectedCurrency(currency);
        localStorage.setItem('selectedCurrency', currency);
    };
    const getCurrencySymbol = ()=>{
        return currencyRates.find((r)=>r.code === selectedCurrency)?.symbol || '$';
    };
    const value = {
        selectedCurrency,
        currencyRates,
        convertPrice,
        setCurrency,
        getCurrencySymbol,
        isLoading
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/CurrencyContext.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
};
_s1(CurrencyProvider, "VJ9SncnbPeYoULIZput9ukSajnw=");
_c = CurrencyProvider;
var _c;
__turbopack_context__.k.register(_c, "CurrencyProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_context_82a4e9a3._.js.map