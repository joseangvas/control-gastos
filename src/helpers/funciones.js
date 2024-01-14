// Del exterior hacia el centro
// IN: funciones:array, Datos: array | object
// OUT: Dato procesado
const compose =
  (...fns) =>
  (xs) =>
    fns.reduceRight((y, f) => f(y), xs);

// Del centro hacia el exterior
// IN: funciones:array, Datos: array | object
// OUT: Dato procesado
const pipe =
  (...fns) =>
  (xs) =>
    fns.reduce((y, f) => f(y), xs);

// Ingresa a las profundidas de un objeto o array
// IN: String separado por <punto>, object | array
// OUT: Dato encontrado
// Ejemplo: deep("persona.nombre", { persona: { nombre: "erick" } })
// Salida: "erick"
const deep = (i) => (x) => {
  const blocks = i.split(".");
  return blocks.reduce((obj, key) => obj[key], x);
};

export const convertData = (...props) => {
  return props.reduce((acum, curr) => ({ ...acum, [curr]: curr }), {});
};

export const isIncludes = (x) => (xs) => xs.includes(x);

export const compareBetween = (x) => (y) => x === y;

export const compareTernaryBetween = (x) => (y) => (bool) => bool ? x : y;

export const reduceByProperty = (x) => (xs) => xs.map((y) => y[x]);

export const takeProperty = (x) => (xs) => xs[x];

export const first = (xs) => xs[0];

export const toCapitalizeCase = (x) => {
  return x
    .split(" ")
    .map((e) => first(e).toUpperCase() + e.slice(1))
    .join("");
};

export const toCamelCase = (x) => {
  const text = x.split(" ");
  return (
    first(text) +
    text
      .slice(1)
      .map((e) => first(e).toUpperCase() + e.slice(1))
      .join("")
  );
};

export const replaceAll = (searchValue) => (replaceValue) => (str) =>
  str.replaceAll(searchValue, replaceValue);

const isTypeObject = (xs) => typeof xs === "object";
const isObject = (xs) => isTypeObject(xs) && !xs.hasOwnProperty("length");
const isArray = (xs) => isTypeObject(xs) && xs.hasOwnProperty("length");
const joinTextList = (xs) => xs.join(" ");
const replaceSpaces = (replaceValue) => (str) =>
  str.replaceAll(/\s+/g, replaceValue);
const getValidString = (x) => (x ? x : "");

// unified plain text or classnames
const unify = (...statementList) => {
  const handlerIsObject = (xs) => {
    const keys = Object.keys(xs);
    const texts = [];

    keys.forEach((key) => {
      if (xs[key]) texts.push(key);
    });

    return joinTextList(texts);
  };

  const handlerIsArray = (xs) => {
    return joinTextList(xs.map((x) => unify(x)));
  };

  const runStatements = (xs) =>
    xs.map((x) => {
      if (isObject(x)) return handlerIsObject(x);
      if (isArray(x)) return handlerIsArray(x);
      return getValidString(x);
    });

  return pipe(runStatements, joinTextList, replaceSpaces(" "))(statementList);
};

// use: console.log(cu(true && "Hola mundo", "Erick", {t: true}, ["Hola mundo", "Ella es maría"], ["Ella es marta", {esMala: false}, [["Hola 2"]]]))

/**
 * @param {String} searchString
 * @return {Object} paramsObject
 * @example
 * // 1. Puedes usarlo enviando:
 * getSearchParams(window.location.search) // retorna {param1: '',...}
 *
 * // 2. ó puedes usarlo enviando con react-router-dom:
 *  const {search} = useLocation();
 *  getSearchParams(search) // retorna {param1: '',...}
 * */
export const getSearchParams = (searchString = "") =>
  Object.fromEntries(new URLSearchParams(searchString).entries());

/**
 * @param {Number} len
 * @param {Function} action
 * @return {Array} Retorna un array.
 * */
export const createData = (len = 1, action = fallbackAction) =>
  Array(len)
    .fill(null)
    .map((_, i) => action(i));

export const formatTwoDigits = (n) => (n < 10 ? "0" : "") + n;
