function titleCase(str) {
    return str.toLowerCase()
          .split(' ')
          .map((word) => {
          return (word.charAt(0).toUpperCase() + word.slice(1))

        }).join(' ');
}

titleCase("HafIDZ iLhaM aJI pERmAnA");

module.exports = titleCase;

