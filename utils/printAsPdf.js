import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const printAsPdf = ({ pageElement, firstName, lastName }) => {
    html2canvas(pageElement, {
        scale: 5,
        useCORS: true,
        allowTaint: true,
    }).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        var doc = new jsPDF({
            orientation: "p",
            unit: "mm",
            format: "a4",
            putOnlyUsedFonts: true,
            floatPrecision: 16,
        });
        const imgProps = doc.getImageProperties(imgData);

        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = (imgProps.height * imgWidth) / imgProps.width;
        var heightLeft = imgHeight;

        var position = 0;

        doc.addImage(
            imgData,
            "JPG",
            0,
            position,
            imgWidth,
            imgHeight,
            null,
            "FAST"
        );
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(
                imgData,
                "JPG",
                0,
                position,
                imgWidth,
                imgHeight,
                null,
                "FAST"
            );
            heightLeft -= pageHeight;
        }
        doc.save(`${firstName}-${lastName}-resume.pdf`);
        //   feedback("Your CV is Ready!");
    });
};