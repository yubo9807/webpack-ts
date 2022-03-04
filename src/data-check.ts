/*
 * @Description: 数据校验函数
 * @Author: yangyb
 * @Date: 2022-01-14 10:20:10
 * @LastEditors: yangyb
 * @LastEditTime: 2022-02-18 14:32:59
 */
import { dataCheck, isNotEmpty, numberRange, isType, arrayItemType, errorSet, foo } from '@/utils/decorate';

export default (data: any) => {
  errorSet.clear(); // 先把 Set 数据清空下，防止多次调用

  // 后端有时因数据库设计问题，经常会返回 null。在这里对数据类型做修改
  if (data.name == null) data.name = '';
  // data.cuteGirl.forEach((val: any, index: number) => {
  //   val == null && (data.cuteGirl[index] = '');
  // })

  @dataCheck(data)
  class UserInfo {

    @isType('string')
    @isNotEmpty
    static username = data.username; // 数据中有 name 时，换个名字

    @numberRange(0, 100)
    @isNotEmpty
    @isType('number')
    static age = data.age;

    @arrayItemType('string')
    @isType('array')
    static cuteGirl = data.cuteGirl;

    static cuteGirlToSimilarArray() {
      const obj: any = {};
      const arr = this.cuteGirl;
      arr.forEach((val: string, index: number) => {
        obj[index] = val;
      })
      obj.length = this.cuteGirl.length;
      return obj;
    }
  }

  return UserInfo;
}
