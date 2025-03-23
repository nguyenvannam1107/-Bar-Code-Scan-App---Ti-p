import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentScreen({ navigation }) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // Hàm xử lý thanh toán
  const handlePay = () => {
    // Xử lý logic thanh toán ở đây (gọi API, v.v.)
    // Sau khi thanh toán thành công, điều hướng sang SuccessScreen:
    navigation.navigate('Success');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Nội dung cuộn (nếu bạn muốn giỏ hàng + form) */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack?.()}
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Checkout</Text>
        </View>

        {/* Hiển thị tổng tiền, VAT */}
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>₹ 1,527</Text>
          <Text style={styles.subAmountText}>Including GST (18%)</Text>
        </View>

        {/* Khối trắng bo góc: form thanh toán */}
        <View style={styles.whiteBox}>
          {/* Chọn phương thức */}
          <View style={styles.paymentMethodRow}>
            <TouchableOpacity style={[styles.methodButton, styles.activeMethod]}>
              <Text style={[styles.methodText, styles.activeMethodText]}>
                Credit card
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.methodButton}>
              <Text style={styles.methodText}>Apple Pay</Text>
            </TouchableOpacity>
          </View>

          {/* Card number */}
          <Text style={styles.label}>Card number</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="5261 4141 0151 8472"
              keyboardType="numeric"
              value={cardNumber}
              onChangeText={setCardNumber}
            />
            {/* Icon quét thẻ (tuỳ ý) */}
            <Ionicons
              name="scan"
              size={24}
              color="#ccc"
              style={{ marginLeft: 8 }}
            />
          </View>

          {/* Cardholder name */}
          <Text style={styles.label}>Cardholder name</Text>
          <TextInput
            style={styles.input}
            placeholder="Christie Doe"
            value={cardHolder}
            onChangeText={setCardHolder}
          />

          {/* Expiry & CVV */}
          <View style={styles.twoColumnRow}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <Text style={styles.label}>Expiry date</Text>
              <TextInput
                style={styles.input}
                placeholder="06 / 2024"
                value={expiry}
                onChangeText={setExpiry}
                keyboardType="numeric"
              />
            </View>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={styles.label}>CVV / CVC</Text>
              <TextInput
                style={styles.input}
                placeholder="915"
                value={cvv}
                onChangeText={setCvv}
                secureTextEntry
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer ghim ở cạnh dưới: Nút Pay */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.payButton} onPress={handlePay}>
          <Text style={styles.payButtonText}>Pay for the order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    paddingBottom: 120, // chừa khoảng trống để không bị nút footer che khuất
  },
  // Header
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    marginTop:50,
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    marginTop:50,
    fontSize: 20,
    fontWeight: '600',
  },
  // Tổng tiền
  amountContainer: {
    marginBottom: 12,
  },
  amountText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4BB86E',
  },
  subAmountText: {
    fontSize: 14,
    color: '#999',
  },
  // Khối trắng
  whiteBox: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 16,
    marginTop: 10,
  },
  // Phương thức thanh toán
  paymentMethodRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  methodButton: {
    backgroundColor: '#F1F1F1',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  activeMethod: {
    backgroundColor: '#4BB86E',
  },
  methodText: {
    fontSize: 14,
    color: '#333',
  },
  activeMethodText: {
    color: '#fff',
  },
  // Label + Input
  label: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
    marginTop: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#EDEDED',
    fontSize: 14,
  },
  twoColumnRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  // Footer (nút Pay)
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  payButton: {
    backgroundColor: '#4BB86E',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
