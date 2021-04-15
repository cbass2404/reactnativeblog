import createDataContext from "./createDataContext";
import jsonServer from "../../api/jsonServer";

const blogReducer = (state, action) => {
    switch (action.type) {
        case "get_blogposts":
            return action.payload;
        case "delete_blogpost":
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case "edit_blogpost":
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost;
            });
        default:
            return state;
    }
};

const getBlogPosts = (dispatch) => {
    return async () => {
        try {
            const response = await jsonServer.get("/blogposts");

            dispatch({ type: "get_blogposts", payload: response.data });
        } catch (e) {
            console.error("getBlogPosts: ", e);
            throw "Something went wrong, try again later.";
        }
    };
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        try {
            await jsonServer.delete(`/blogposts/${id}`);

            dispatch({ type: "delete_blogpost", payload: id });
        } catch (e) {
            console.error("deleteBlogPost: ", e);
            throw "Something went wrong, try again later.";
        }
    };
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        try {
            await jsonServer.put(`/blogposts/${id}`, { title, content });

            if (callback) {
                callback();
            }
        } catch (e) {
            console.error("editBlogPost: ", e);
            throw "Something went wrong, try again later.";
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { getBlogPosts, deleteBlogPost, editBlogPost },
    []
);
