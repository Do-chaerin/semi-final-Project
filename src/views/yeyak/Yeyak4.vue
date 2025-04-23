<script setup>
import { useReservationStore } from "../../stores/reservationStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const selectedPayment = ref("");
const showModal = ref(false);
const reservationStore = useReservationStore();
const router = useRouter();

const paymentNames = {
  bank: "계좌이체",
  card: "카드결제",
  kakao: "카카오페이",
  naver: "네이버페이",
};

const confirmPayment = () => {
  if (!selectedPayment.value) {
    alert("결제 수단을 선택해주세요.");
    return;
  }

  showModal.value = true; // 자동 이동 X
};

const closeModal = () => {
  showModal.value = false;

  router.push({
    path: "/yeyak5",
    query: {
      payment: selectedPayment.value,
    },
  });
};
</script>

<template>
  <div class="payment-container">
    <!-- 왼쪽: 예약 정보 -->
    <div class="payment-left">
      <div class="title">
        <h2>예약 정보</h2>
      </div>
      <table class="info-table">
        <tr>
          <th>이름</th>
          <td>{{ reservationStore.name }}</td>
        </tr>
        <!-- 이하 동일 -->
      </table>
    </div>

    <!-- 오른쪽: 결제 수단 -->
    <div class="payment-right">
      <div class="title">
        <h2>결제 수단</h2>
      </div>
      <div class="payment-options">
        <label
          v-for="(label, key) in paymentNames"
          :key="key"
          class="credit-option">
          <input type="radio" :value="key" v-model="selectedPayment" />
          <span>{{ label }}</span>
        </label>
      </div>

      <div class="payment-info" v-if="selectedPayment">
        <h4>{{ paymentNames[selectedPayment] }}</h4>
        <p v-if="selectedPayment === 'bank'">
          대구은행 123-456-78910 예금주: 도용달
        </p>
        <img
          v-else
          :src="`/images/cr/yy_${selectedPayment}.jpg`"
          alt="결제 이미지" />
      </div>

      <button class="st_reser" @click="confirmPayment">결제하기</button>
    </div>
  </div>

  <!-- 모달 -->
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-box">
      <p>
        선택하신 <strong>{{ paymentNames[selectedPayment] }}</strong
        >로 결제가 완료되었습니다.
      </p>
      <button @click="closeModal" class="st_reser">확인</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

.st_wrap {
  width: 100%;
  max-width: 700px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: $font-family;
  height: 100vh;
}
.yy_title1 {
  display: flex;
  gap: 10px;
  line-height: 40px;
  flex-wrap: wrap; /* 넘치면 자동 줄바꿈 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  padding-bottom: 10px;
  .title_txt1 h1 {
    font-size: 40px;
    font-family: "omyu_pretty";
  }
}
.st_wrap {
  max-width: 720px;
  margin: 80px auto;
  padding: 32px;
  background-color: #fff;
  border-radius: 16px;
  font-family: "Pretendard", sans-serif;
  color: #222;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.yy_title1 .title_txt1 h1 {
  font-size: 30px;
  font-weight: 700;
  color: #03c75a;
  margin-bottom: 20px;
}

.st_check {
  background: #f8f8f8;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  padding: 24px;
  margin-bottom: 30px;
}

.st_table th,
.st_table td {
  padding: 14px 10px;
  border-bottom: 1px solid #eaeaea;
  font-size: 15px;
}

.st_table th {
  color: #555;
  font-weight: 600;
  width: 100px;
  text-align: left;
}

.st_table td {
  color: #111;
}

.yy_credit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin: 30px 0;
}

.credit-option {
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #fff;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 12px;
}

.credit-option input[type="radio"] {
  display: none;
}

.credit-option span {
  color: #333;
}

.credit-option input[type="radio"]:checked + span {
  color: #03c75a;
  font-weight: 700;
}

.payment-info {
  border: 1px solid #03c75a;
  background-color: #e9f9f0;
  padding: 1rem;
  border-radius: 10px;
  font-size: 15px;
  margin-bottom: 20px;
  text-align: left;
}

.payment-info img {
  width: 100%;
  max-width: 420px;
  border-radius: 8px;
  margin-top: 10px;
}

.st_button {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  border: none;
}

.st_reser {
  width: 150px;
  height: 50px;
  line-height: 25px;
  margin: 20px auto;
  display: inline-block;
  padding: 12px 24px;
  background-color: $main-color;
  color: rgb(255, 255, 255);
  font-size: 16px;
  border-radius: 30px;
  text-align: center;
  text-decoration: none;
  border: none;
  transition: background 0.3s;
}

.st_reser:hover {
  background-color: $hover;
}
// 모달
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-box {
  background: white;
  padding: 2rem 2rem;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
}

@media screen and (max-width: 768px) {
  .st_wrap {
    margin: 50px auto;
    padding: 0 16px;
    justify-content: center;
  }

  .yy_title1 .title_txt1 h1 {
    font-size: 30px;
    font-family: "omyu_pretty";
    text-align: center;
  }

  .st_check {
    padding: 15px;
    width: 100%;
  }

  .st_table {
    width: 100%;
    table-layout: fixed; // ✅ 비율 유지
    border-collapse: collapse;
    margin: 0 auto;
  }

  .st_table th,
  .st_table td {
    padding: 8px;
    font-size: 15px;
    word-break: keep-all;
    vertical-align: middle;
    text-align: left; // ✅ 모바일에서도 읽기 쉽게
  }

  .st_table th {
    width: 100px; // ✅ th는 고정폭
    font-weight: bold;
    white-space: nowrap;
  }

  .st_table td {
    width: auto; // ✅ td는 남은 공간
  }

  .st_table th.th-bag {
    vertical-align: top !important;
  }

  .yy_credit {
    align-items: stretch;
    gap: 8px; // ✅ 세로 간격 줄이기
    padding: 10px; // ✅ 전체 여백 줄이기 (기존 padding이 있다면 확인)
  }

  .credit-option {
    width: calc(100% / 4);
    font-size: 15px;
    padding: 6px 10px; // ✅ 기존보다 작게
    display: flex;
    align-items: center;
    justify-content: flex-start; // ✅ space-between이 아니라 정렬 왼쪽
    border-radius: 8px;
  }

  .payment-info {
    font-size: 15px;
    padding: 8px 12px; // ✅ padding 줄이기
    margin-top: 10px; // ✅ 위아래 간격 확인
    line-height: 1.4;
  }

  .st_reser {
    width: 150px;
    height: 50px;
    line-height: 25px;
    font-size: 16px;
    padding: 12px 24px;
    margin-top: 20px;
  }

  .modal-box {
    font-size: 16px;
    width: 90%;
  }
}

@media (max-width: 390px) {
  .st_wrap {
    margin: 50px auto;
    padding: 0 16px;
    justify-content: center;
  }

  .st_table {
    width: 90%;
    font-size: 15px;
    th,
    td {
      padding: 6px;
    }
  }
  .yy_credit {
    display: flex;
    flex-wrap: wrap; // ✅ 줄바꿈 허용
    justify-content: space-between;
    gap: 10px;
  }

  .credit-option {
    width: calc(50% - 5px); // ✅ 2개씩 정렬 (gap 고려해서)
    font-size: 15px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    box-sizing: border-box; // ✅ padding 포함한 너비 계산
  }

  .payment-info {
    font-size: 15px;
    padding: 10px;
    margin: 10px;
  }
  .payment-info img {
    width: 100%;
    max-width: 350px;
    height: auto;
    margin-top: 8px;
  }
  .yy_title1 .title_txt1 h1 {
    font-size: 30px;
    font-family: "omyu_pretty";
    text-align: center;
  }

  .st_reser {
    width: 150px;
    height: 50px;
    line-height: 25px;
    font-size: 16px;
    padding: 12px 24px;
    margin-top: 20px;
  }
}
</style>
