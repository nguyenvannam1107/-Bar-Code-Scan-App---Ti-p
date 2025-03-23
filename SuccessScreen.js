import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SuccessScreen({ navigation, route }) {
  // Nếu bạn truyền dữ liệu từ PaymentScreen, bạn có thể lấy ở đây
  // const { total, orderId } = route.params || {};

  // Nút "Check Details"
  const handleCheckDetails = () => {
    // Xử lý logic xem chi tiết (ví dụ hiển thị hoá đơn,...)
    alert('Show order details / invoice...');
  };

  // Nút "Download Invoice"
  const handleDownloadInvoice = () => {
    // Xử lý logic tải hoá đơn,...
    alert('Downloading invoice...');
  };

  // Nút back
  const goBack = () => {
    // Quay về Payment hoặc quay về màn hình đầu
    navigation.popToTop(); 
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header với nút back */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Nội dung */}
      <View style={styles.content}>
        {/* Ảnh minh hoạ */}
        <Image
          source={require('./assets/icon.png')} 
          // thay bằng ảnh của bạn
          style={styles.illustration}
          resizeMode="contain"
        />

        <Text style={styles.title}>Payment Success, Yayy!</Text>
        <Text style={styles.subtitle}>
          We will send order details and invoice in your contact no. 
          and registered email
        </Text>

        {/* Nút "Check Details" */}
        <TouchableOpacity style={styles.checkDetailsBtn} onPress={handleCheckDetails}>
          <Text style={styles.checkDetailsText}>Check Details</Text>
          <Ionicons name="arrow-forward" size={16} color="#4C4CFF" style={{ marginLeft: 4 }} />
        </TouchableOpacity>
      </View>

      {/* Footer: Nút "Download Invoice" */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.downloadBtn} onPress={handleDownloadInvoice}>
          <Text style={styles.downloadBtnText}>Download Invoice</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop:50,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  illustration: {
    width: 150,
    height: 150,
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 16,
    marginBottom: 24,
    lineHeight: 20,
  },
  checkDetailsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkDetailsText: {
    fontSize: 16,
    color: '#4C4CFF',
  },
  footer: {
    padding: 16,
  },
  downloadBtn: {
    backgroundColor: '#4C4CFF',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
  },
  downloadBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
