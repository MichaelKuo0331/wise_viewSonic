export const handleCopyText = (copyString: string) => {
  navigator.clipboard
    .writeText(copyString)
    .then(() => {
      alert(`複製成功: ${copyString}`);
    })
    .catch(() => {
      alert("複製失敗");
    });
};
