export const FormatDate = review => {
  const reviewDate = new Date(review).toLocaleDateString().split('');
  reviewDate.pop();
  const formattedReviewDate = reviewDate
    .join('')
    .replaceAll('.', '-')
    .replaceAll(' ', '');
  return formattedReviewDate;
};
