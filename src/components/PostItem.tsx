import { Link } from "react-router";
import type { Post } from "./PostList";

interface Props {
    post: Post;
}

export const PostItem = ({ post }: Props) => {
    return (
        <div>
            <div />
            <Link to={`/post/${post.id}`}>
                <div>
                    {/* Header:Avatar and Title */}
                    <div>
                        {post.avatar_url ? (
                             <img
                src={post.avatar_url}
                alt="User Avatar"
                className="w-[35px] h-[35px] rounded-full object-cover"
              />
                        ) : (
                            <div />
                        )
                        }
                        <div>
                            <div>
                                {post.title}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Image Banner */}

                <div>
                    <img src={post.image_url} alt={post.title} />
                </div>
            </Link>
        </div>
    )
}