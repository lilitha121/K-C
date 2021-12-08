$('#exportForm').click(function(){
  var pdf = new jsPDF('a', 'mm', 'a4');
  var firstPage;
  var secondPage;
  
  html2canvas($('#first-page'), {
    onrendered: function(canvas) {
      firstPage = canvas.toDataURL('image/jpeg', 1.0);
    }
  });
  
  html2canvas($('#second-page'), {
    onrendered: function(canvas) {
      secondPage = canvas.toDataURL('image/jpeg', 1.0);
    }
  });
  
  
  setTimeout(function(){
    pdf.addImage(firstPage, 'JPEG', 5, 5, 200, 0);
    pdf.addPage();
    pdf.addImage(secondPage, 'JPEG', 5, 5, 200, 0);
    pdf.save("export.pdf");
  }, 150);
});