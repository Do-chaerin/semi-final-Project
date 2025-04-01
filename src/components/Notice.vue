<script setup>
import { computed, ref, watch } from "vue";
// notice 더미 데이터
const notices = ref([
  {
    title: "가방도 서비스오픈",
    content: "사전예약시 2,000원 할인",
  },
  {
    title: "수하물 크기 제한 변경 안내",
    content:
      "2025년 4월 1일부터 수하물의 크기 제한이 변경됩니다. 기내 수하물은 최대 55cm x 40cm x 20cm로 제한되며, 체크인 수하물은 최대 23kg까지 허용됩니다. 이를 초과하는 수하물은 추가 요금이 부과될 수 있습니다.",
  },
  {
    title: "수하물 보험 서비스 추가 안내",
    content:
      "새롭게 수하물 보험 서비스가 추가되었습니다. 여행 중 분실, 파손, 지연 등 사고에 대비하여 최대 100만원까지 보상받을 수 있습니다. 보험 서비스는 결제 시 선택 가능합니다.",
  },
  {
    title: "수하물 분실 시 처리 절차 안내",
    content:
      "수하물이 분실된 경우, 고객 서비스센터에 즉시 신고해 주세요. 분실된 수하물은 최대 14일 이내에 추적되며, 분실 확인 후 보상 절차가 진행됩니다. 보상 관련 자세한 내용은 홈페이지에서 확인하실 수 있습니다.",
  },
  {
    title: "수하물 규격 초과 시 추가 요금 안내",
    content:
      "수하물 규격 초과 시, 초과된 무게와 크기에 따라 추가 요금이 부과됩니다. 추가 요금은 공항에서 결제 가능하며, 사전 예약을 통해 할인된 가격으로 처리할 수 있습니다.",
  },
  {
    title: "수하물 픽업 서비스 안내",
    content:
      "2025년 5월부터 수하물 픽업 서비스가 도입됩니다. 공항까지 수하물을 가져가실 필요 없이, 집에서 공항까지 수하물을 안전하게 운반해 드리는 서비스입니다. 예약은 웹사이트에서 가능합니다.",
  },
  {
    title: "수하물 지연 안내 및 보상",
    content:
      "수하물이 지연된 경우, 지연된 시간에 따라 보상 정책이 적용됩니다. 3시간 이상 지연된 경우, 식사 및 숙박 비용의 일부를 보상해 드리며, 24시간 이상 지연 시 추가 보상 혜택이 제공됩니다.",
  },
  {
    title: "기내 수하물 제한 품목 안내",
    content:
      "기내 수하물에 반입할 수 없는 품목에 대한 규정이 강화되었습니다. 액체, 젤, 스프레이 등 100ml 이상은 기내 반입이 금지되며, 해당 품목은 반드시 체크인 수하물로 보내셔야 합니다.",
  },
  {
    title: "수하물 안전 검사 강화 안내",
    content:
      "2025년 6월부터 수하물 안전 검사가 강화됩니다. 모든 수하물은 X-ray 검사와 추가적인 수동 검사를 거칠 수 있으며, 검사가 완료되기 전에는 출발이 지연될 수 있습니다. 협조 부탁드립니다.",
  },
  {
    title: "수하물 손상 시 보상 절차 안내",
    content:
      "수하물이 손상된 경우, 공항에서 즉시 신고해야 합니다. 손상된 수하물에 대해서는 최대 50만원까지 보상받을 수 있으며, 보상 절차는 고객 서비스 센터를 통해 진행됩니다.",
  },
  {
    title: "수하물 프리미엄 서비스 출시 안내",
    content:
      "2025년 7월부터 프리미엄 수하물 서비스가 제공됩니다. 우선 처리, 전용 수하물 취급, 추가 보험 서비스 등 다양한 혜택이 포함되어 있으며, 사전 예약을 통해 저렴한 가격에 이용 가능합니다.",
  },
]);
const activeIndex = ref(null);

// 공지사항을 클릭했을 때 열고 닫기
const toggleNotice = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const currentPage = ref(1);
const itemsPerPage = 5;

// 총 페이지 수 계산
const totalPages = computed(() => {
  return Math.ceil(notices.value.length / itemsPerPage);
});

// 현재 페이지에 해당하는 공지사항 목록 계산
const paginatedNotices = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return notices.value.slice(start, start + itemsPerPage);
});

// 페이지가 변경될 때마다 첫 번째 공지사항이 자동으로 열리도록 할 수도 있음
watch(currentPage, (newPage) => {
  const start = (newPage - 1) * itemsPerPage;
  activeIndex.value = null; // 첫 번째 공지사항을 자동으로 열기
});

// 이전 페이지로 이동
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// 다음 페이지로 이동
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<template>
  <div class="st_notice-container">
    <table class="st_notice-table">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(notice, index) in paginatedNotices" :key="index">
          <!-- 제목 줄 -->
          <tr @click="toggleNotice(index)" class="st_title-row">
            <td class="st_number">
              {{ (currentPage - 1) * itemsPerPage + index + 1 }}
            </td>
            <td>
              {{ notice.title }}
              <span class="st_toggle-icon">{{
                activeIndex === index ? "▲" : "▼"
              }}</span>
            </td>
          </tr>
          <!-- 내용 줄 -->
          <tr v-if="activeIndex === index" class="st_content-row">
            <td colspan="2">{{ notice.content }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <!-- 페이지네이션 -->
    <div class="st_pagination">
      <button @click="prevPage" :disabled="currentPage === 1"><<</button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="{ active: currentPage === page }">
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        >>
      </button>
    </div>
  </div>
</template>

<style scoped>
.st_notice-container {
  max-width: 700px;
  margin: auto;
  padding: 20px;
  text-align: center;
}
.st_notice-table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border-bottom: 1px solid #ddd;
  padding: 10px;
}
.st_number {
  text-align: center;
}
th {
  color: #4c4c4c;
}
.st_content-row {
  background-color: #f9f9f9;
  cursor: pointer;
}
.st_toggle-icon {
  float: right;
  font-size: 10px;
  margin-right: 50px;
}
.st_title-row,
.st_content-row {
  text-align: left;
}

.st_pagination {
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
button {
  font-family: "Pretendard-Regular";
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  background-color: #fff;
}

button.active {
  color: #333;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
