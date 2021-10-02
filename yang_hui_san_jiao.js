// 杨辉三角：计算给定坐标的数值

// 解法一：递归
const yang_hui_san_jiao_cache = {};
function findInCache(x, y) {
	const coordinate = `(${x},${y})`;
	const cacheValue = yang_hui_san_jiao_cache[coordinate];
	if (cacheValue) return cacheValue;
	const symmetricY = x + 1 - y;
	const symmetricCoordinate = `(${x},${symmetricY})`;
	return yang_hui_san_jiao_cache[symmetricCoordinate];
}
function yang_hui_san_jiao_recursion(x, y) {
	// y=1：/边界，x=y：\边界
	if (y === 1 || x === y) return 1;
	const cacheValue = findInCache(x, y);	// 首先从缓存中查找
	if (cacheValue) return cacheValue;
	// 其他情况，算两边
	const coordinate = `(${x},${y})`;
	console.log(`calc coordinate ${coordinate}`);
	const value = yang_hui_san_jiao_recursion(x - 1, y - 1) + yang_hui_san_jiao_recursion(x - 1, y);
	yang_hui_san_jiao_cache[coordinate] = value;	// 算好的值放入缓存
	return value;
}
// const res1 = yang_hui_san_jiao_recursion(7, 4);
// console.log(res1);
// console.log(yang_hui_san_jiao_cache);

// 解法二：动态规划
function yang_hui_san_jiao_dp(x, y) {
	function yang_hui_san_jiao(rowIndex) {
		let pre = [],cur = [];
		for (let i = 0; i <= rowIndex; i++) {
			cur = [];
			cur[0] = cur[i] = 1;
			for (let j = 1;j < i;j++) {
				cur[j] = pre[j - 1] + pre[j];
			}
			pre = cur;
		}
		return pre;
	}
	return yang_hui_san_jiao(x - 1)[y - 1];
}
const res2 = yang_hui_san_jiao_dp(7, 4)
console.log(res2);