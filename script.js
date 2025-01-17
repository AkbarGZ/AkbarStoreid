document.addEventListener('DOMContentLoaded', () => {
    const cpuLoadElement = document.getElementById('cpuLoad');
    const memoryUsageElement = document.getElementById('memoryUsage');
    const diskUsageElement = document.getElementById('diskUsage');
    const netInboundElement = document.getElementById('netInbound');
    const netOutboundElement = document.getElementById('netOutbound');
    const commandInput = document.getElementById('commandInput');
    const consoleOutput = document.getElementById('consoleOutput');


    function updateStats() {
      
        cpuLoadElement.textContent = (Math.random() * 0.1).toFixed(2);
        memoryUsageElement.textContent = (100 + Math.random() * 100).toFixed(2) + ' MiB / 2...';
        diskUsageElement.textContent = (500 + Math.random() * 100).toFixed(2) + ' MiB / 2...';
        netInboundElement.textContent = (Math.random() * 1.5).toFixed(2) + ' MiB';
        netOutboundElement.textContent = (Math.random() * 700).toFixed(2) + ' KiB';

    }

    //Update every 3 seconds
    setInterval(updateStats, 3000);
    updateStats();

    // Auto response
    function autoRespond(message) {
      if (message.toLowerCase().trim() === 'halo') {
        return 'hai';
      }
      return null;
    }
    // event handler ketika tekan enter pada input
    commandInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const input = commandInput.value;
        commandInput.value = '';

        // Tambahkan input pengguna ke console output
        consoleOutput.innerHTML += `<span style="color: #a0d2eb;">> ${input}</span><br/>`;
        
        const response = autoRespond(input);
        if (response) {
          // Tambahkan response ke console output
          consoleOutput.innerHTML += `<span style="color: #52ef4b;">${response}</span><br/>`;
        }
        consoleOutput.scrollTop = consoleOutput.scrollHeight; // Scroll ke bawah
      }
    });
});
