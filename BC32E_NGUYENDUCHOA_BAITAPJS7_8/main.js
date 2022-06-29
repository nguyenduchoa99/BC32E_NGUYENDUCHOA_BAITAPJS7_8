var arr = [];
document.getElementById('btnThemSo').onclick = function () {
    var nhapSo = Number(document.getElementById('nhapSo').value);
    arr.push(nhapSo);
    document.getElementById('ketQua').innerHTML = '👉 ' + arr;
}

document.getElementById('btnTinhTong').onclick = function () {
    var ketQuaBai1 = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            ketQuaBai1 += arr[i];
        }
    }
    document.getElementById('ketQuaBai1').innerHTML = '👉 ' + ketQuaBai1;
}

document.getElementById('btnDemSo').onclick = function () {
    var ketQuaBai2 = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            ketQuaBai2++;
        }
    }
    document.getElementById('ketQuaBai2').innerHTML = '👉 ' + ketQuaBai2;
}

document.getElementById('btnTimSoNhoNhat').onclick = function () {
    var ketQuaBai3 = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < ketQuaBai3) {
            ketQuaBai3 = arr[i];
        }
    }
    document.getElementById('ketQuaBai3').innerHTML = '👉 ' + ketQuaBai3;
}

document.getElementById('btnTimSoDuongNhoNhat').onclick = function () {
    var iSo = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            iSo.push(arr[i]);
        } else {
            document.getElementById('ketQuaBai4').innerHTML = '👉 ' + 'Không có số dương trong mảng!';
        }
        var ketQuaBai4 = iSo[0];
        for (j = 0; j < iSo.length; j++) {
            if (iSo[j] <= ketQuaBai4) {
                ketQuaBai4 = iSo[j];
                document.getElementById('ketQuaBai4').innerHTML = '👉 ' + ketQuaBai4;
            }
        }
    }
}


document.getElementById('btnTimSoChanCuoiCung').onclick = function () {
    var ketQuaBai5 = -1;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            ketQuaBai5 = arr[i];
        }
    }
    document.getElementById('ketQuaBai5').innerHTML = '👉 ' + ketQuaBai5;
}

document.getElementById('btnDoiCho').onclick = function () {
    var nhapSo1 = Number(document.getElementById('nhapSo_1').value);
    var nhapSo2 = Number(document.getElementById('nhapSo_2').value);
    var doiCho = arr[nhapSo1];
    arr[nhapSo1] = arr[nhapSo2];
    arr[nhapSo2] = doiCho;
    document.getElementById('ketQuaBai6').innerHTML = '👉 ' + arr;
}

function doiChoBai7(index1, index2) {
    var doiCho = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = doiCho;
}

document.getElementById('btnSapXep').onclick = function () {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                doiChoBai7(j, j + 1);
            }
        }
    }
    document.getElementById('ketQuaBai7').innerHTML = '👉 ' + arr;
}

function soNguyenTo(iSo) {
    var kiemTra = true;
    if (iSo < 2) {
        kiemTra = false;
    }
    for (uoc = 2; uoc <= Math.sqrt(iSo); uoc++) {
        if (iSo % uoc == 0) {
            kiemTra = false;
            break;
        }
    }
    return kiemTra;
}

document.getElementById('btnTimSoNguyenTo').onclick = function () {
    var iSo3 = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            iSo3.push(arr[i]);
        } else {
            document.getElementById('ketQuaBai8').innerHTML = '👉 ' + ' -1';
        }
        for (j = 0; j < iSo3.length; j++) {
            if (soNguyenTo(iSo3[j])) {
                iSo3 = iSo3[j];
                document.getElementById('ketQuaBai8').innerHTML = '👉 ' + iSo3;
                break;
            } else {
                document.getElementById('ketQuaBai8').innerHTML = '👉 ' + ' -1';
            }
        }
    }
}

var arrNumber = [];
document.getElementById('btnThemSo2').onclick = function () {
    var nhapSo_3 = Number(document.getElementById('nhapSo_3').value);
    arrNumber.push(nhapSo_3);
    document.getElementById('ketQua2').innerHTML = '👉 ' + arrNumber;
}

document.getElementById('btnDemSoNguyen').onclick = function () {
    var dem = 0;
    for (i = 0; i < arrNumber.length; i++) {
        if (Number.isInteger(arrNumber[i])) {
            dem++;
        }
    }
    document.getElementById('ketQuaBai9').innerHTML = '👉 ' + dem;
}

document.getElementById('btnSoSanh').onclick = function () {
    var demSoDuong = 0;
    var demSoAm = 0;
    var ketQuaBai10 = '';
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            demSoDuong++;
        } else if (arr[i] < 0) {
            demSoAm++;
        } else {
            demSoAm++;
            demSoDuong++;
        }
    }
    if (demSoDuong > demSoAm) {
        ketQuaBai10 = 'Số Dương > Số Âm';
    } else if (demSoDuong < demSoAm) {
        ketQuaBai10 = 'Số Dương < Số Âm';
    } else {
        ketQuaBai10 = 'Số Dương = Số Âm';
    }
    document.getElementById('ketQuaBai10').innerHTML = '👉 ' + ketQuaBai10;
}