import Logo from "@/assets/images/logo-devlinks-large.svg";
import { supabase } from "@/lib/supabase";
import { colors } from "@/theme/native";
import { useState } from "react";
import { Alert, Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);


  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session, user },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (error) Alert.alert(error.message)
    if (session) supabase.from('users').insert([{ id: user?.id, email: email, password: password }])
    setLoading(false)
  }

  return (
    <Pressable onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <View>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Let’s get you started sharing your links!</Text>
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputLabel}>Email adress</Text>
            <TextInput style={styles.input} activeUnderlineColor="#633CFF" placeholder="e.g. alex@email.com" left={<TextInput.Icon icon="email" />} value={email} onChangeText={setEmail} />
          </View>
          <View>
            <Text style={styles.inputLabel}>Create password</Text>
            <TextInput style={styles.input} activeUnderlineColor="#633CFF" placeholder="Enter your password" left={<TextInput.Icon icon="lock" />} value={password} onChangeText={setPassword} />
          </View>
          <View>
            <Text style={styles.inputLabel}>Confirm password</Text>
            <TextInput style={styles.input} activeUnderlineColor="#633CFF" placeholder="Enter your password" left={<TextInput.Icon icon="lock" />} value={confirmPassword} onChangeText={setConfirmPassword} />
          </View>
          <Pressable style={styles.button} disabled={loading} onPress={signUpWithEmail}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: "semibold" }}>Create new account</Text>
          </Pressable>
          <View style={styles.linkContainer}>
            <Text style={{ color: '#737373', fontSize: 16, fontWeight: "semibold" }}>Already have an account?</Text>
            <Text style={{ color: '#633CFF', fontSize: 16, fontWeight: "semibold" }}>Sign In</Text>
          </View>
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
