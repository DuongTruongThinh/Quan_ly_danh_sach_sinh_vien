function renderDSSV(dssv) {
  var contentHTML = "";
  for (var i = 0; i < dssv.length; i++) {
    var data = dssv[i];
    contentTr = `<tr>
      <td>${data.ma}</td>
      <td>${data.ten}</td>
      <td>${data.email}</td>
      <td>${data.tinhDiemTB()}</td>
      <td>
      <button class="btn btn-warning" onclick = "suaSv('${
        data.ma
      }')">Sửa</button>
      <button class="btn btn-danger" onclick = "xoaSv('${
        data.ma
      }')">Xóa</button>
      </td>
      </tr> `;
    contentHTML = contentHTML + contentTr;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
function timViTri(id, dssv) {
  return dssv.findIndex(function (sv) {
    return sv.ma == id;
  });
}
function layThongTinTuForm() {
  var _ma = document.getElementById("txtMaSV").value;
  var _ten = document.getElementById("txtTenSV").value;
  var _email = document.getElementById("txtEmail").value;
  var _diemToan = document.getElementById("txtDiemToan").value * 1;
  var _diemLy = document.getElementById("txtDiemLy").value * 1;
  var _diemHoa = document.getElementById("txtDiemHoa").value * 1;
  var sv = new SinhVien(_ma, _ten, _email, _diemToan, _diemLy, _diemHoa);
  return sv;
}
function showThongTinLenForm(sv) {
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtEmail").value = sv.mail;
  document.getElementById("txtDiemToan").value = sv.diemToan;
  document.getElementById("txtDiemLy").value = sv.diemLy;
  document.getElementById("txtDiemHoa").value = sv.diemHoa;
}
