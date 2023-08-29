export const FormatDate = review => {
  const reviewDate = new Date(review.createdAt).toLocaleDateString().split('');
  reviewDate.pop();
  const formattedReviewDate = reviewDate
    .filter(el => el !== '')
    .join('')
    .replaceAll('.', '-')
    .replaceAll(' ', '');
  return formattedReviewDate;
};
