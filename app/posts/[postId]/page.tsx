export interface PostDetailPageProps {}

export default function PostDetailPage({ params }: { params: { postId: string } }) {
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>My Post: {params.postId}</p>
    </div>
  );
}
