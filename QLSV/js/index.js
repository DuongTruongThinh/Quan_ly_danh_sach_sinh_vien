function SinhVien() {
  this.ma = document.getElementById("txtMaSV").value;
  this.ten = document.getElementById("txtTenSV").value;
  this.loai = document.getElementById("loaiSV").value;
  this.diemToan = document.getElementById("txtDiemToan").value * 1;
  this.diemVan = document.getElementById("txtDiemVan").value * 1;
  this.diemTrungBinh = 0.5 * (this.diemToan + this.diemVan);
  this.xepLoai = function () {
    if (this.diemTrungBinh < 5) return "không đạt";
    else return "đạt";
  };
}
function showThongTin() {
  var sv = new SinhVien();
  document.getElementById("spanTenSV").innerHTML = sv.ten;
  document.getElementById("spanMaSV").innerHTML = sv.ma;
  document.getElementById("spanLoaiSV").innerHTML = sv.loai;
  document.getElementById("spanDTB").innerHTML = sv.diemTrungBinh;
  document.getElementById("spanXepLoai").innerHTML = sv.xepLoai();
}
