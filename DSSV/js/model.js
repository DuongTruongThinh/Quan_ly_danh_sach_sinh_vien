function SinhVien(_ma, _ten, _email, _matKhau, _diemToan, _diemLy, _diemHoa) {
  this.ma = _ma;
  this.ten = _ten;
  this.email = _email;
  this.matKhau = _matKhau;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;
  this.tinhDiemTB = function () {
    var dtb = (this.diemToan + this.diemLy + this.diemHoa) / 3;
    return dtb.toFixed(2);
  };
}
