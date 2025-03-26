<script>
  function formatPhoneNumber(phoneStr) {
    phoneStr = phoneStr.trim();
    var parts = phoneStr.split(/x|ext/i);
    var main = parts[0].trim();
    var ext = parts[1] ? parts[1].trim() : "";
    var digits = main.replace(/\D/g, "");
    if (digits.length === 10) {
      digits = "+1" + digits;
    } else {
      digits = "+" + digits;
    }
    if (ext) {
      return digits + "," + ext;
    }
    return digits;
  }
  document.addEventListener("DOMContentLoaded", function() {
    var phoneCells = document.querySelectorAll(".phone-cell");
    phoneCells.forEach(function(cell) {
      var rawNumber = cell.getAttribute("data-phone");
      var formattedNumber = formatPhoneNumber(rawNumber);
      var link = document.createElement("a");
      link.href = "tel:" + formattedNumber;
      link.title = "Call " + rawNumber;
      link.innerHTML = cell.innerHTML;
      cell.innerHTML = "";
      cell.appendChild(link);
    });
  });
</script>