// Данные вынесены в начало файла
const data = [
    { id: "000115", date: "22.02.2024 - 27.02.2024", plan: "25 000,00", fact: "24 500,00", city: "Москва", status: "Завершена" },
    { id: "000116", date: "01.03.2024 - 05.03.2024", plan: "30 000,00", fact: "29 000,00", city: "Санкт-Петербург", status: "В процессе" },
    { id: "000117", date: "10.03.2024 - 15.03.2024", plan: "40 000,00", fact: "38 000,00", city: "Сочи", status: "Завершена" },
    { id: "000118", date: "15.03.2024 - 20.03.2024", plan: "35 000,00", fact: "34 000,00", city: "Казань", status: "В процессе" },
    { id: "000119", date: "20.03.2024 - 25.03.2024", plan: "28 000,00", fact: "27 000,00", city: "Екатеринбург", status: "Завершена" },
    { id: "000120", date: "25.03.2024 - 30.03.2024", plan: "32 000,00", fact: "31 000,00", city: "Новосибирск", status: "В процессе" },
    { id: "000121", date: "30.03.2024 - 04.04.2024", plan: "42 000,00", fact: "41 000,00", city: "Нижний Новгород", status: "Завершена" },
    { id: "000122", date: "05.04.2024 - 10.04.2024", plan: "26 000,00", fact: "25 000,00", city: "Самара", status: "В процессе" },
    { id: "000123", date: "10.04.2024 - 15.04.2024", plan: "38 000,00", fact: "37 000,00", city: "Ростов-на-Дону", status: "Завершена" }
];

document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('table-body');

    // Генерируем строки таблицы
    const rowsHTML = data.map(item => {
        // Определяем класс для статуса, чтобы он был цветным
        const statusClass = item.status === 'Завершена' ? 'status-completed' : 'status-progress';
        
        return `
            <tr>
                <td>${item.id}</td>
                <td>${item.date}</td>
                <td>${item.plan} ₽</td>
                <td>${item.fact} ₽</td>
                <td>${item.city}</td>
                <td><span class="status ${statusClass}">${item.status}</span></td>
            </tr>
        `;
    }).join('');

    // Вставляем один раз (это быстрее, чем innerHTML += в цикле)
    tbody.innerHTML = rowsHTML;
});