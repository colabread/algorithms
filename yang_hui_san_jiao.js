// 杨辉三角：计算给定坐标的数值

// 解法一：递归
const yang_hui_san_jiao_cache = {};
function yang_hui_san_jiao_recursion(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new Error('x or y must be number');
	}
	if (x < 1 || y < 1) {
		throw new Error('x or y can not less than 1');
	}
	// y=1：/边界
	// x=y：\边界
	if (y === 1 || x === y) return 1;
	else {
		const coordinate = `(${x},${y})`;
		const cacheValue = yang_hui_san_jiao_cache[coordinate];	// 首先从缓存中查找
		if (cacheValue) return cacheValue;
		else if (x % 2 === 1 && Math.ceil(x / 2) === y) {	// 正中央的情况，只算一边
			// console.log(`calc coordinate ${coordinate}`);
			const value = 2 * yang_hui_san_jiao(x - 1, y - 1);
			yang_hui_san_jiao_cache[coordinate] = value;	// 算好的值放入缓存
			return value;
		} else {	// 其他情况，算两边
			// console.log(`calc coordinate ${coordinate}`);
			const value = yang_hui_san_jiao(x - 1, y - 1) + yang_hui_san_jiao(x - 1, y);
			yang_hui_san_jiao_cache[coordinate] = value;	// 算好的值放入缓存
			return value;
		}
	}
}
// const res = yang_hui_san_jiao(1000, 9);
// console.log(res)
// console.log(yang_hui_san_jiao_cache)

// 解法二：动态规划一（带缓存）
function yang_hui_san_jiao_dp1(x, y) {
	const dp = [];
	for (let i = 0; i < x; i++) {
		dp[i] = [];
		dp[i][0] = 1;
		dp[i][i] = 1;
	}
	for (let i = 2; i < x; i++) {
		for (let j = 1; j < y; j++) {
			if (i > j) dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
		}
	}
	console.log(dp);
	return dp[x - 1][y - 1];
}

// const res = yang_hui_san_jiao_dp1(9, 5);
// console.log(res);

// 解法三：动态规划一（不带缓存）
function yang_hui_san_jiao_dp2(x, y) {
	if (y === 1 || x === y) return 1;
	let left = 1;
	let right = 1;
	let res = 0;
	for (let i = 2; i < x; i++) {
		for (let j = 1; j < y, j < i; j++) {
			res = left + right
			left = 1;
			right = res;
		}
	}
	return res;
}

const res = yang_hui_san_jiao_dp2(4, 2);
console.log(res);