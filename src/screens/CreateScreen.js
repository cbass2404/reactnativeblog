import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

// context
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const { addBlogPost } = useContext(Context);

    return (
        <View>
            <Text style={styles.labelStyle}>Enter Title:</Text>
            <TextInput
                style={styles.inputStyle}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.labelStyle}>Enter Content:</Text>
            <TextInput
                style={styles.inputStyle}
                value={content}
                onChangeText={(content) => setContent(content)}
            />
            <Button
                title="Add Blog Post"
                onPress={() => addBlogPost(title, content)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    labelStyle: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    },
});

export default CreateScreen;
