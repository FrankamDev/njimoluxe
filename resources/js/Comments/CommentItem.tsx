import '../../../resources/js/pages/Blog/blog.css';
interface User {
  id: number;
  name: string;
  avatar?: string;
  initials: string;
}

interface Comment {
  id: number;
  content: string;
  created_at: string;
  user: User;
  likes_count: number;
  is_liked: boolean;
  replies: Comment[];
}

import { useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function CommentItem({ comment, postId }: { comment: Comment, postId: number }) {
  const [showReply, setShowReply] = useState(false);
  const { auth } = usePage().props as any;

  const { data, setData, post, processing, reset } = useForm({
    content: '',
    post_id: postId,
    parent_id: comment.id,
  });

  const submitReply = (e: React.FormEvent) => {
    e.preventDefault();
    post('/comments', {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        reset();
        setShowReply(false);
      }
    });
  };

  const toggleLike = () => {
    if (!auth.user) return;
    router.post(route('comments.like', comment.id), {}, { preserveScroll: true });
  };

  const deleteComment = () => {
    if (!confirm('Voulez-vous vraiment supprimer ce commentaire ?')) return;
    router.delete(route('comments.destroy', comment.id), { preserveScroll: true });
  };

  return (
    <div className="flex gap-3 mb-4">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white">
          {comment.user.avatar ? (
            <img src={comment.user.avatar} alt={comment.user.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            comment.user.initials
          )}
        </div>
      </div>

      <div className="flex-grow">
        <div className="bg-gray-800 rounded-2xl px-4 py-2 inline-block">
          <h4 className="font-bold text-sm text-white">{comment.user.name}</h4>
          <p className="text-sm text-gray-300">{comment.content}</p>
        </div>

        <div className="flex items-center gap-4 mt-1 ml-2 text-xs text-gray-500 font-semibold">
          <span>{comment.created_at}</span>
          <button onClick={toggleLike} className={`${comment.is_liked ? 'text-emerald-500 font-bold' : 'hover:underline'}`}>J'aime</button>
          <button onClick={() => setShowReply(!showReply)} className="hover:underline">Répondre</button>
          {auth.user && auth.user.id === comment.user.id && (
            <button onClick={deleteComment} className="text-red-500 hover:underline">Supprimer</button>
          )}
          {comment.likes_count > 0 && (
            <span className="flex items-center gap-1 text-gray-400 font-normal">
              👍 {comment.likes_count}
            </span>
          )}
        </div>

        {showReply && (
          <form onSubmit={submitReply} className="mt-3 flex gap-2">
            <input
              type="text"
              value={data.content}
              onChange={e => setData('content', e.target.value)}
              placeholder={`Répondre à ${comment.user.name}...`}
              className="flex-grow bg-gray-800 border-none rounded-full px-4 py-2 text-sm text-white focus:ring-1 focus:ring-emerald-500"
              autoFocus
            />
            <button
              type="submit"
              disabled={processing || !data.content.trim()}
              className="text-emerald-500 font-bold text-sm disabled:opacity-50"
            >
              POSTER
            </button>
          </form>
        )}

        {/* Nested Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-3 ml-2 pl-3 border-l-2 border-gray-800">
            {comment.replies.map(reply => (
              <CommentItem key={reply.id} comment={reply} postId={postId} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
