import EmbedCode from '@components/EmbedCode/EmbedCode';
import VisitGitHub from '@components/VisitGitHub/VisitGitHub';

function OriginalAlgorithm() {
  const codeString = `
    # python3.7.11
    # algorithm function (takes only ideal scenario into consideration):
    def find_pivot(array):
        # array must have at least 3 elements:
        if len(array) < 3:
            return -1

        # solution for an array with just 3 elements:
        if len(array) == 3:
            return {'index': 1, 'value': array[1], 'sum': array[0]}

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
        return {'index': left_idx + 1, 'value': array[left_idx + 1], 'sum': left_count}


    # main function:
    def main():
        print(find_pivot([1, 2, 1]))  # {'index': 1, 'value': 2, 'sum': 1}
        print(find_pivot([1, 2, 6, 3]))  # {'index': 2, 'value': 6, 'sum': 3}
        print(find_pivot([2, 1, 2, 1, 3, 2]))  # {'index': 3, 'value': 1, 'sum': 5}
        print(find_pivot([2, 2, 2, 2, 2, 2, 2, 6, 10, 3, 1, 5, 2, 5, 3, 1, 3, 14]))
        # {'index': 10, 'value': 1, 'sum': 33}


    # Entry point:
    if __name__ == '__main__':
        main()
  `;

  const GH_LINK =
    'https://github.com/cristianblar/kiwiflask-api/blob/main/original_algorithm.py';

  return (
    <section>
      <EmbedCode stringCode={codeString} />
      <VisitGitHub ghLink={GH_LINK} />
    </section>
  );
}

export default OriginalAlgorithm;
