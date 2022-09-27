import { defineComponents, DocumentReaderService } from './main.js';

window.RegulaDocumentSDK = new DocumentReaderService();

defineComponents()
  .then(() => window.RegulaDocumentSDK.prepare())
  .then(() => window.RegulaDocumentSDK.initialize({license: 'AAEAAA2Uo8qkJF0Juj8kmPlEXWRfgJJ3W2nqFSVPDVsEp53bXM7k594lE1AUUEm4HP9VquqNJSZWVFHoVO+p9bbRwJWLyYtABqs8ICXire74/3gkIy2QkoaJgZo+4FThZJRu3Rki6u7RGzRWditj4cI/XEXRrwv4TVDoJndFSRX/XE9lTC155SQcAt43CaIRI6mHzBA6ErmM6beF/zqmc0W1Aj0CENAn0vhDn2axAYpBHDYl6IViMkj9TIQbpyFPFHGU3RyZnz0UzIVfWhu3+kOkN01Ei28NtVEgVuc3bUr1Y3zvb0n7y1+i3hyvOD+PcM5qsPJrRIwlvrzp0ggcak3FgykkAQAAAAAAEGU1Doc9Y+ZdzpYD2N/N/suS+PJfrCoDA+++mJ8pva4hFTpyS87jpgRvO5LhoZRwyr7gPHq5zPTGiJtYpRpuR7uVHZmECdnQvC8IotpqYOHv8vvY9DEXypNLuydzOVpaoB0ftf6UEZif2SFlQyT0gNhDyoxA+dIZX6ROzVAfumtEuGV3l4nAet6ZMDAEc2EDO6mpiFj7XsA1CDxZI52OiGE8Rg7pCCXqmu+epOBjkDZ8U/aGQpd7joM00nMUsBI/yX+BZOg6GUaMBub5C3fEcJd4ZYXBNDgl9NmAcHkq4uGs8mbCDZIdWjQngw0dMAMXb7HQ7EZTWoMxi+XG5Sbt+ivkuxRCFsx7OziqoMwCBjg1YpLyv1zZhX/+X63NHqbezA=='}));

const component = document.getElementsByTagName('document-reader')[0];

function listener(event) {
  if (event.detail) {
    const response = event.detail; // The response of the component will be located here
    console.log(response); // Doing something with the response
  }
}

// Adding an event listener to our component
component.addEventListener('document-reader', listener);