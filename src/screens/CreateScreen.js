import React, { useContext } from "react";
import { StyleSheet } from "react-native";

// context
import { Context } from "../context/BlogContext";

// local files
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);

    return (
        <BlogPostForm
            onSubmit={(title, content) => {
                addBlogPost(title, content, () => navigation.navigate("Index"));
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default CreateScreen;
