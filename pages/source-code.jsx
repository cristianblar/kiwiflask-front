import EmbedCode from '@components/EmbedCode/EmbedCode';
import VisitGitHub from '@components/VisitGitHub/VisitGitHub';

function SourceCode() {
  const codeString = `
    def find_pivot(array):
      # array must have at least 3 elements:
      if len(array) < 3 or type(array) != list:
          return -1

      # array must have only positive integers:
      if len(list(filter(lambda num: num < 1, array))):
          return -1

      # solution for an array with just 3 elements:
      if len(array) == 3 and array[0] == array[2]:
          return {'index': 1, 'value': array[1], 'sum': array[0]}

      if len(array) == 3 and array[0] != array[2]:
          return -2

      # Initialization of 2 pointers and 2 sums for each side of the array:
      left_idx = 0
      left_count = array[left_idx]
      right_idx = len(array) - 1
      right_count = array[right_idx]

      # Loop to iterate len(array) - 3 times (left initialized + right initialized + pivot position)
      for i in range(len(array) - 3):
          if (right_count + array[right_idx - 1]) > (left_count + array[left_idx + 1]):
              left_idx += 1
              left_count += array[left_idx]
          else:
              right_idx -= 1
              right_count += array[right_idx]

      """
          Return of useful information:
          index: the position of the array where the pivot is located
          value: the value of the pivot
          sum: the total sum of each side of the array
      """
      if left_count == right_count:
          return {'index': left_idx + 1, 'value': array[left_idx + 1], 'sum': left_count}
      else:
          return -2
  `;

  const GH_LINK = 'https://github.com/cristianblar/kiwiflask-api';

  return (
    <section>
      <EmbedCode stringCode={codeString} />
      <VisitGitHub ghLink={GH_LINK} />
    </section>
  );
}

export default SourceCode;
