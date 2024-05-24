const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

const giaKmDauTien = {
  [UBER_CAR]: 8000,
  [UBER_SUV]: 9000,
  [UBER_BLACK]: 10000,
};

const gia1Den19 = {
  [UBER_CAR]: 7500,
  [UBER_SUV]: 8500,
  [UBER_BLACK]: 9500,
};

const giaTren19 = {
  [UBER_CAR]: 7000,
  [UBER_SUV]: 8000,
  [UBER_BLACK]: 9000,
};

const giaTGCho = {
  [UBER_CAR]: 2000,
  [UBER_SUV]: 3000,
  [UBER_BLACK]: 3500,
};

document.querySelector(".contact100-form-btn").onclick = function () {
  const inputLoaiXe = document.querySelector("input[type='radio']:checked");
  if (!inputLoaiXe) {
    alert("Vui lòng chọn loại xe");
    return;
  }
  const loaiXe = inputLoaiXe.value;
  const soKM = parseFloat(document.getElementById("txt-km").value);
  const thoiGianCho = parseFloat(
    document.getElementById("txt-thoiGianCho").value
  );
  const soKMHon19 = soKM > 19 ? soKM - 19 : 0;
  const tongTienTGCho = Math.floor(thoiGianCho / 3) * giaTGCho[loaiXe];
  const kmTren19 = Math.max(0, soKM - 19);
  const kmDen19 = Math.min(soKM, 19);

  const tongTien =
    giaKmDauTien[loaiXe] +
    gia1Den19[loaiXe] * (kmDen19 - 1) +
    giaTren19[loaiXe] * kmTren19 +
    tongTienTGCho;

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "VND",
    }
  );

  document.querySelector(".modal-body").innerHTML = `
        <table class="table table-bordered styled-table">
            <tr>
                <th colspan="4" class="text-center">CHI TIẾT HÓA ĐƠN</th>
            </tr>
            <tr>
                <th class="text-center p-3">CHI TIẾT</th>
                <th class="text-center p-3">SỬ DỤNG</th>
                <th class="text-center p-3">ĐƠN GIÁ (1.000đ)</th>
                <th class="text-center p-3">THÀNH TIỀN (1.000đ)</th>
            </tr>
            <tr>
                <th>KM ĐẦU TIÊN</th>
                <td>1</td>
                <td>${giaKmDauTien[loaiXe].toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}</td>
                <td>${giaKmDauTien[loaiXe].toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}</td>
            </tr>
            <tr>
                <th>Từ 1 đến 19</th>
                <td>${kmDen19 - 1}</td>
                <td>${gia1Den19[loaiXe].toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}</td>
                <td>${(gia1Den19[loaiXe] * (kmDen19 - 1)).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}</td>
            </tr>
            <tr>
                <th>Từ 19 đến ${soKM}</th>
                <td>${kmTren19}</td>
                <td>${giaTren19[loaiXe].toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}</td>
                <td>${(giaTren19[loaiXe] * kmTren19).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}</td>
            </tr>
            <tr>
                <th>Thời gian chờ</th>
                <td>${thoiGianCho}</td>
                <td>${giaTGCho[loaiXe].toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}</td>
                <td>${tongTienTGCho.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}</td>
            </tr>
            <tr>
                <td colspan="4" align="right">Tổng tiền: ${tongTien.toLocaleString(
                  "vi",
                  { style: "currency", currency: "VND" }
                )}</td>
            </tr>
        </table>`;
};
