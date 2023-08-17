function kiemTraRong(idErr, value) {
  if (value.trim().length == 0) {
    document.getElementById(idErr).innerHTML =
      "Nội dung này không được để rỗng";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
function kiemTraDoDai(min, max, idErr, value) {
  var length = value.trim().length;
  if (length < min || length > max) {
    document.getElementById(
      idErr
    ).innerHTML = `Nội dung có từ ${min} đến ${max} ký tự`;
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
function kiemTraEmail(idErr, value) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!re.test(value)) {
    document.getElementById(idErr).innerHTML = "Email không hợp lệ";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
