import { generateApi } from "@/utils/api";
let list = Array.from({ length: 1000 }).map((v, i) => {
  return {
    id: i,
    name: "张三" + i,
    age: 3,
    bothDate: "1990-01-01",
    city: i % 2 ? "武汉" : "北京",
    class: "三年级（2）班",
  };
});
export const getChildrens = (params) => {
  let data = {
    total: list.length,
    page: params.page,
    size: params.size,
    data: list.slice(
      (params.page - 1) * params.size,
      params.page * params.size
    ),
  };
  return generateApi(data);
};
