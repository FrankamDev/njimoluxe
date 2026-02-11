import { useForm, usePage } from '@inertiajs/react';
import CommentItem from './CommentItem';

interface Comment {
  id: number;
  content: string;
  created_at: string;
  user: any;
  likes_count: number;
  is_liked: boolean;
  replies: Comment[];
}

export default function CommentSection({ comments, postId }: { comments: Comment[], postId: number }) {
  const { auth } = usePage().props as any;

  const { data, setData, post, processing, reset, errors } = useForm({
    content: '',
    post_id: postId,
    parent_id: null,
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();           // ← Ceci empêche le rechargement de la page

    post('/comments', {
      preserveScroll: true,       // ← Très important : garde la position du scroll
      preserveState: true,        // Garde l'état du composant
      onSuccess: () => {
        reset();                  // Vide le champ après succès
      },
      onError: (err) => {
        console.log('Erreurs :', err);
      }
    });
  };

  return (
    <div className="mt-8 pt-6 border-t border-gray-800">
      <h3 className="text-xl font-bold text-white mb-6">Commentaires ({comments.length})</h3>

      {/* Nouveau commentaire */}
      {auth.user ? (
        <div className="flex gap-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-emerald-700 flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">
            {auth.user.profile_photo_url ? (
              <img
                src={auth.user.profile_photo_url}
                className="w-full h-full rounded-full object-cover"
                alt={auth.user.name}
              />
            ) : (
              auth.user.name.substring(0, 2).toUpperCase()
            )}
          </div>

          <form onSubmit={submit} className="flex-grow">
            <textarea
              value={data.content}
              onChange={(e) => setData('content', e.target.value)}
              placeholder="Écrivez un commentaire..."
              className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none h-20"
              disabled={processing}
            />

            {errors.content && (
              <p className="text-red-400 text-sm mt-1">{errors.content}</p>
            )}

            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={processing || !data.content.trim()}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {processing ? 'Envoi...' : 'Commenter'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-gray-900 rounded-lg p-4 mb-8 text-center">
          <p className="text-gray-400 text-sm">Connectez-vous pour participer à la discussion.</p>
          <a href="/login" className="text-emerald-400 hover:underline text-sm font-bold mt-2 inline-block">
            Se connecter
          </a>
        </div>
      )}

      {/* Liste des commentaires */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} postId={postId} />
        ))}
      </div>
    </div>
  );
}