

  function Redirect() {
    location.href="https://github.com/ronit-code?tab=repositories";
  }


function downloadFile() {
  const link = document.createElement("a");
  link.href = "resume.pdf"
  link.download = '';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

}
