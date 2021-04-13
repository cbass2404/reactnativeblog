import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity,
} from "react-native";

// context
import { Context } from "../context/BlogContext";

// icons
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>
                                {item.title} = {item.id}
                            </Text>
                            <TouchableOpacity
                                onPress={() => deleteBlogPost(item.id)}
                            >
                                <Feather name="trash" style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "gray",
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
});

export default IndexScreen;
