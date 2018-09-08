import WRITINGS from '~/constants/writings';

export default ({ params, redirect }) => {
  const { title } = params;
  const content = WRITINGS.list.find(blog => blog.key === title);
  if (!content) {
    redirect(301, '/');
  }
}