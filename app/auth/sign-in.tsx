import Logo from "@/assets/images/logo-devlinks-large.svg";
import { supabase } from "@/lib/supabase";
import { colors } from "@/theme/native";
import { dismissKeyboard } from "@/utils/keyboard";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) Alert.alert(error.message)
    setLoading(false)
  }
  return (
    <Pressable onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <View>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Add your details below to get back into the app</Text>
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.input} activeUnderlineColor="#633CFF" placeholder="e.g. alex@email.com" left={<TextInput.Icon icon="email" />} value={email} onChangeText={setEmail} />
          </View>
          <View>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput style={styles.input} activeUnderlineColor="#633CFF" placeholder="Enter your password" left={<TextInput.Icon icon="lock" />} value={password} onChangeText={setPassword} />
          </View>
          <Pressable style={styles.button} disabled={loading} onPress={signInWithEmail}><Text style={{ color: '#fff', fontSize: 16, fontWeight: "semibold" }}>Login</Text></Pressable>
          <View style={styles.linkContainer}><Text style={{ color: '#737373', fontSize: 16, fontWeight: "semibold" }}>Don&apos;t have an account?</Text>
            <Text style={{ color: '#633CFF', fontSize: 16, fontWeight: "semibold" }}>Create Account</Text></View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    margin: 32,
  },
  logo: {
    width: 200,
    height: "auto",
    marginTop: 12,
  },
  title: {
    marginTop: 60,
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: colors.colorGrey,
  },
  form: {
    gap: 16,
    marginTop: 28,
  },
  inputLabel: {
    fontSize: 12,
    color: '#737373',
  },
  input: {
    backgroundColor: colors.colorWhite,
    borderWidth: 1,
    borderColor: colors.colorBorders,
    borderRadius: 5,
    height: 48,
    width: 311,
    marginTop: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.colorWhite,
    backgroundColor: colors.colorPurple,
    height: 48,
    width: 311,
    marginTop: 20,
    borderRadius: 8,
  },
  link: {
    color: colors.colorPurple,
  },
  linkContainer: {
    marginTop: 12,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
