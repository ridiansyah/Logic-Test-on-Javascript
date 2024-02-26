function mergeLists(list1, list2) {
  const mergedList = [];
  let i = 0;
  let j = 0;

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      mergedList.push(list1[i]);
      i++;
    } else {
      mergedList.push(list2[j]);
      j++;
    }
  }

  while (i < list1.length) {
    mergedList.push(list1[i]);
    i++;
  }

  while (j < list2.length) {
    mergedList.push(list2[j]);
    j++;
  }

  return mergedList;
}

const bob = [3, 4, 6, 10, 11, 15];
const alice = [1, 5, 8, 12, 14, 19];

console.log(mergeLists(bob, alice));
