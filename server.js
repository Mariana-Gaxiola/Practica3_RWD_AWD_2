// CARGAMOS EL MOTOR PRINCIPAL DE EXPRESS PARA CREAR EL SERVIDOR 
const express = require('express');

// CARGAMOS LA HERRAMIENTA QUE PERMITE RECONOCER SI ESTAS ENTRANDO DESDE UN CELULCAR O UNA COMPUTADORORA
const useragent = require('express-useragent');

// CARGAMOS LA UTILIDAD PARA MANEJAR LAS RUTAS Y CARPETAS DE LA COMPUTADORA
const path = require('path');

// INICIALIZAMOS LA APLICACIÓN WEB
const app = express();

// DEFINIMOS EL NÚMERO DE PUERTO DONDE VA A FUNCIONAR
const PORT = 3000;

// CONFIGURAMOS A EJS COMO EL SISTEMA DE PÁGINAS DINÁMICAS
app.set('view engine', 'ejs');

// INDICAMOS DÓNDE ESTÁN GUARDADAS LAS VISTAS O SEA LAS PANTALLAS 
app.set('views', path.join(__dirname, 'views'));

// ACTIVAMOS EL DETECTOR DE DE DISPOSITIVOS SI ES CELULAR O COMPUTARORA
app.use(useragent.express());

// CONECAMOS CON LA CARPETA DEL CSS
app.use(express.static(path.join(__dirname, 'public')));

// CONECTRAMOS LA CARPETA DE IMAGENES 
app.use('/Img', express.static(path.join(__dirname, 'Img')));

app.get('/adaptive', (req, res) => {

    // ESTAS USANDO TELEFONO? 
    const isMobile = req.useragent.isMobile;

    const productos = [
        { nombre: "Intel Xeon Gold 6230", specs: "20 Cores, 40 Threads, 2.10 GHz", socket: "Socket LGA 3647", tdp: "125W TDP", precio: "$1,299.00", img: "images (10).jpg" },
        { nombre: "AMD EPYC 7763", specs: "64 Cores, 128 Threads, 2.45 GHz", socket: "Socket SP3", tdp: "280W TDP", precio: "$3,500.00", img: "712FmtRt-EL.jpg" },
        { nombre: "Samsung 64GB DDR4 ECC", specs: "3200 MHz, 288-pin RDIMM", socket: "Datacenter ECC", tdp: "1.2V", precio: "$250.00", img: "images (1).jpg" },
        { nombre: "Micron 128GB DDR5", specs: "4800 MHz, Alta densidad LRDIMM", socket: "Datacenter ECC", tdp: "1.1V", precio: "$899.00", img: "images.jpg" },
        { nombre: "Intel Optane SSD P5800X", specs: "1.6TB, U.2 PCIe 4.0 NVMe", socket: "100 DWPD (Resistencia)", tdp: "7200 MB/s Lectura", precio: "$1,800.00", img: "images (2).jpg" },
        { nombre: "Samsung PM9A3 3.84TB", specs: "U.2 Datacenter SSD, PCIe 4.0", socket: "V-NAND TLC", tdp: "6800 MB/s Lectura", precio: "$450.00", img: "images (3).jpg" },
        { nombre: "Seagate Exos X18 18TB", specs: "HDD Enterprise 7200 RPM, SATA 6Gb/s", socket: "Llenado de Helio", tdp: "256MB Cache", precio: "$320.00", img: "images (4).jpg" },
        { nombre: "Mellanox ConnectX-6 Dx", specs: "Adaptador de red 100GbE", socket: "Dual-Port QSFP56", tdp: "Interfaz PCIe 4.0", precio: "$650.00", img: "images (5).jpg" },
        { nombre: "Broadcom MegaRAID 9560", specs: "Controladora RAID PCIe 4.0", socket: "8 Puertos NVMe/SAS", tdp: "8GB Cache Integrado", precio: "$720.00", img: "images (6).jpg" },
        { nombre: "Supermicro 1200W PSU", specs: "Fuente de Poder Hot-swap Redundante", socket: "80 Plus Titanium", tdp: "Formato 1U/2U", precio: "$180.00", img: "images (7).jpg" },
        { nombre: "NVIDIA A100 Tensor Core", specs: "Acelerador de IA para Datacenter", socket: "80GB HBM2e VRAM", tdp: "300W TDP", precio: "$10,500.00", img: "images (8).jpg" },
        { nombre: "NVIDIA Tesla T4", specs: "Acelerador de Inferencia de Bajo Perfil", socket: "16GB GDDR6", tdp: "75W TDP", precio: "$1,200.00", img: "images (9).jpg" }
    ];

    //EJECUTAMOS LA VERSION COMPUTADORA O CELULAR 
    if (isMobile) {
        res.render('mobile', { productos });
    } else {
        res.render('desktop', { productos });
    }
});

// PRENDEMOS EL SERVIDOR 
app.listen(PORT, () => {
    console.log(`Servidor AWD corriendo en http://localhost:${PORT}/adaptive`);
});