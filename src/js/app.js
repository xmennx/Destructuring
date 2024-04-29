export default function sortProperty(obj, order) {
    const propSorted = [];
  
    for (let i = 0; i < order.length; i++) {
      if (order[i] in obj) {
        propSorted[i] = {
          key: order[i],
          value: obj[order[i]],
        };
      }
    }
  
    const arr = [];
    for (const property in obj) {
      if (!order.includes(property)) {
        arr.push(property);
      }
    }
  
    const newArr = arr.sort();
    for (const property of newArr) {
      propSorted.push({
        key: property,
        value: obj[property],
      });
    }
  
    return propSorted;
  }