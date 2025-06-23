import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const API_URL = "https://rwanda-weather-api-qguibbqsvq-uc.a.run.app/run";

export default function ChatBot() {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user" as const, text: input };
    setMessages([...messages, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      const botMsg = {
        from: "bot" as const,
        text: data.response || "Sorry, no response.",
      };
      setMessages((msgs) => [...msgs, botMsg]);
    } catch (e) {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Error contacting the bot." },
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.fab} onPress={() => setVisible(true)}>
        <Text style={{ fontSize: 28 }}>💬</Text>
      </TouchableOpacity>
      <Modal visible={visible} animationType="slide" transparent>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>Weather Assistant</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={styles.close}>✕</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={messages}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.bubble,
                  item.from === "user" ? styles.user : styles.bot,
                ]}
              >
                <Text>{item.text}</Text>
              </View>
            )}
            style={styles.chat}
          />
          {loading && <ActivityIndicator />}
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
              placeholder="Type your message..."
              onSubmitEditing={sendMessage}
              editable={!loading}
            />
            <TouchableOpacity onPress={sendMessage} disabled={loading}>
              <Text style={styles.send}>➤</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 70,
    right: 30,
    backgroundColor: "#2563eb",
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  modal: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: { fontWeight: "bold", fontSize: 18 },
  close: { fontSize: 22 },
  chat: { flex: 1 },
  bubble: { marginVertical: 4, padding: 10, borderRadius: 10, maxWidth: "80%" },
  user: { alignSelf: "flex-end", backgroundColor: "#dbeafe" },
  bot: { alignSelf: "flex-start", backgroundColor: "#f3f4f6" },
  inputRow: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 10,
    marginRight: 8,
  },
  send: { fontSize: 24, color: "#2563eb" },
});
