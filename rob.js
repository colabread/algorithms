// 打家劫舍
const cache = [];

const moneys = [2, 7, 9, 3, 1];
// const moneys = [1, 2, 3, 1];

// 解法一（递归）
function rob_recursion(moneys) {
    function recursion(index) {
        if (index === 0) return moneys[0];
        else if (index === 1) return Math.max(moneys[1], moneys[0]);
        const cacheValue = cache[index];
        if (cacheValue) return cacheValue;
        const selectRes = moneys[index] + recursion(index - 2);
        const unselectRes = recursion(index - 1);
        const res = Math.max(selectRes, unselectRes);
        cache[index] = res;
        return res;
    }
    return recursion(moneys.length - 1);
}
const res1 = rob_recursion(moneys);
console.log(res1);

// 解法二（记忆动态规划）
function rob_dp_cache(moneys) {
    if (moneys.length === 0) return 0;
    if (moneys.length === 1) return moneys[0];
    const dp = [];
    dp[0] = moneys[0];
    dp[1] = Math.max(moneys[0], moneys[1]);
    for (let i = 2; i < moneys.length; i++) {
        const selectRes = moneys[i] + dp[i - 2];
        const unselectRes = dp[i - 1];
        dp[i] = Math.max(selectRes, unselectRes);
    }
    return dp[moneys.length - 1];
}
// const res2 = rob_dp_cache(moneys);
// console.log(res2);

// 解法二（无记忆动态规划）
function rob_dp(moneys) {
    if (moneys.length === 0) return 0;
    if (moneys.length === 1) return moneys[0];
    let pre1 = Math.max(moneys[1], moneys[0]);
    let pre2 = moneys[0];
    let res = pre1;
    for (let i = 2; i < moneys.length; i++) {
        const selectRes = moneys[i] + pre2;
        const unselectRes = pre1;
        res = Math.max(selectRes, unselectRes);
        pre2 = pre1;
        pre1 = res;
    }
    return res;
}
// const res3 = rob_dp(moneys);
// console.log(res3);