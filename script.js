document.addEventListener('DOMContentLoaded', () => {
    // --- Модуль для Галереи Модов ---
    const modGridContainer = document.getElementById('mod-grid-container');
    const modDetailPage = document.getElementById('mod-detail-page');
    const modsGallerySection = document.getElementById('mods-gallery-section');
    const backToModsBtn = document.getElementById('back-to-mods');
    const modSearchInput = document.getElementById('mod-search');
    const modVersionFilter = document.getElementById('mod-version-filter');
    const modCategoryFilter = document.getElementById('mod-category-filter');

    // Sample Mod Data (имитация данных с сервера)
    const modsData = [
        {
            id: 'journeymap',
            title: 'JourneyMap',
            image: 'https://via.placeholder.com/400x200?text=JourneyMap_Thumb', // Замените на реальное изображение
            description: 'Один из лучших модов для карты в Minecraft. Позволяет просматривать мир в реальном времени, ставить метки, и многое другое.',
            fullDescription: 'JourneyMap - это мод для Minecraft, который отображает ваш мир в реальном времени во время исследования. Вы можете просматривать карту в веб-браузере или в игре, на миникарте или в полноэкранном режиме. Мод также предлагает множество полезных функций, таких как установка путевых точек, отображение мобов и пещер, а также возможность сохранять и загружать карты.',
            version: '1.20.1',
            category: 'Исследование',
            // !!! ВАЖНО: ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА РЕАЛЬНЫЙ ПУТЬ К ВАШЕМУ .JAR ФАЙЛУ МОДА !!!
            downloadLink: 'https://example.com/downloads/journeymap-1.20.1.jar',
            screenshots: [
                'https://via.placeholder.com/600x350?text=JM_Screenshot1', // Замените на реальное изображение
                'https://via.placeholder.com/600x350?text=JM_Screenshot2',
                'https://via.placeholder.com/600x350?text=JM_Screenshot3'
            ]
        },
        {
            id: 'create',
            title: 'Create Mod',
            image: 'https://via.placeholder.com/400x200?text=Create_Thumb', // Замените на реальное изображение
            description: 'Мод на автоматизацию и создание сложных механизмов с уникальной физикой.',
            fullDescription: 'Мод Create добавляет в Minecraft множество инструментов и блоков для создания сложных автоматизированных систем и машин. Он фокусируется на кинетической энергии, позволяя строить механизмы, такие как конвейеры, подъемники, автоматические фермы, и многое другое, с использованием шестеренок, двигателей и других интерактивных блоков. Create предлагает уникальный подход к автоматизации, отличающийся от традиционных технических модов.',
            version: '1.20.1',
            category: 'Технологии',
            // !!! ВАЖНО: ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА РЕАЛЬНЫЙ ПУТЬ К ВАШЕМУ .JAR ФАЙЛУ МОДА !!!
            downloadLink: 'https://example.com/downloads/create-mod-1.20.1.jar',
            screenshots: [
                'https://via.placeholder.com/600x350?text=Create_Screenshot1', // Замените на реальное изображение
                'https://via.placeholder.com/600x350?text=Create_Screenshot2',
                'https://via.placeholder.com/600x350?text=Create_Screenshot3'
            ]
        },
        {
            id: 'farmers-delight',
            title: 'Farmer\'s Delight',
            image: 'https://via.placeholder.com/400x200?text=FarmersDelight_Thumb', // Замените на реальное изображение
            description: 'Расширяет возможности фермерства и кулинарии в Minecraft, добавляя новые культуры и блюда.',
            fullDescription: 'Farmer\'s Delight - это мод, который значительно улучшает аспекты фермерства и кулинарии в Minecraft. Он добавляет множество новых культур, рецептов, инструментов и блоков, позволяя игрокам создавать более разнообразные и сложные блюда. Мод также включает в себя новые способы хранения продуктов и приготовления пищи, делая фермерство более увлекательным и полезным занятием.',
            version: '1.19.2',
            category: 'Выживание',
            // !!! ВАЖНО: ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА РЕАЛЬНЫЙ ПУТЬ К ВАШЕМУ .JAR ФАЙЛУ МОДА !!!
            downloadLink: 'https://example.com/downloads/farmers-delight-1.19.2.jar',
            screenshots: [
                'https://via.placeholder.com/600x350?text=FD_Screenshot1', // Замените на реальное изображение
                'https://via.placeholder.com/600x350?text=FD_Screenshot2',
                'https://via.placeholder.com/600x350?text=FD_Screenshot3'
            ]
        },
        {
            id: 'comfort',
            title: 'Comforts',
            image: 'https://via.placeholder.com/400x200?text=Comforts_Thumb', // Замените на реальное изображение
            description: 'Добавляет спальные мешки, которые можно использовать в любом месте.',
            fullDescription: 'Мод Comforts вводит в игру спальные мешки, которые работают как обычные кровати, но имеют ряд преимуществ: их можно разместить и использовать где угодно (даже в Незере или Энде), они не устанавливают точку возрождения и могут быть легко подобраны. Это идеальное решение для путешественников и исследователей, которым нужен быстрый способ пропустить ночь без потери места спавна.',
            version: '1.20.1',
            category: 'Выживание',
            // !!! ВАЖНО: ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА РЕАЛЬНЫЙ ПУТЬ К ВАШЕМУ .JAR ФАЙЛУ МОДА !!!
            downloadLink: 'https://example.com/downloads/comforts-1.20.1.jar',
            screenshots: [
                'https://via.placeholder.com/600x350?text=Comforts_Screenshot1', // Замените на реальное изображение
                'https://via.placeholder.com/600x350?text=Comforts_Screenshot2'
            ]
        },
        {
            id: 'decorative-blocks',
            title: 'Decorative Blocks',
            image: 'https://via.placeholder.com/400x200?text=DecorativeBlocks_Thumb', // Замените на реальное изображение
            description: 'Множество новых декоративных блоков для строительства и украшения.',
            fullDescription: 'Мод Decorative Blocks добавляет в Minecraft широкий ассортимент новых блоков, предназначенных исключительно для декоративных целей. Это включает в себя различные виды бревен, столы, стулья, заборы, решетки, лампы и многое другое, что позволяет игрокам создавать более детализированные и эстетически приятные постройки. Мод идеально подходит для тех, кто любит украшать свои базы и города.',
            version: '1.18.2',
            category: 'Декор',
            // !!! ВАЖНО: ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА РЕАЛЬНЫЙ ПУТЬ К ВАШЕМУ .JAR ФАЙЛУ МОДА !!!
            downloadLink: 'https://example.com/downloads/decorative-blocks-1.18.2.jar',
            screenshots: [
                'https://via.placeholder.com/600x350?text=DB_Screenshot1', // Замените на реальное изображение
                'https://via.placeholder.com/600x350?text=DB_Screenshot2'
            ]
        },
        {
            id: 'ice-and-fire',
            title: 'Ice and Fire: Dragons in a new world',
            image: 'https://via.placeholder.com/400x200?text=IceAndFire_Thumb', // Замените на реальное изображение
            description: 'Добавляет драконов и других мифических существ в мир Minecraft.',
            fullDescription: 'Ice and Fire - это эпический мод, который приносит в мир Minecraft могущественных драконов и других фантастических существ. Игроки могут столкнуться с ледяными и огненными драконами, грифонами, гидрами, химерами и многими другими. Мод позволяет охотиться на этих существ, приручать их, использовать их части для создания брони и оружия, или даже летать на драконах. Это значительно расширяет исследование и приключения в игре.',
            version: '1.16.5',
            category: 'Исследование',
            // !!! ВАЖНО: ЗАМЕНИТЕ ЭТУ ССЫЛКУ НА РЕАЛЬНЫЙ ПУТЬ К ВАШЕМУ .JAR ФАЙЛУ МОДА !!!
            downloadLink: 'https://example.com/downloads/ice-and-fire-1.16.5.jar',
            screenshots: [
                'https://via.placeholder.com/600x350?text=IAF_Screenshot1', // Замените на реальное изображение
                'https://via.placeholder.com/600x350?text=IAF_Screenshot2',
                'https://via.placeholder.com/600x350?text=IAF_Screenshot3'
            ]
        }
    ];

    let currentMods = [...modsData]; // Массив для текущего отображения (для фильтрации)

    function renderMods(modsToRender) {
        if (!modGridContainer) return;
        modGridContainer.innerHTML = '';

        if (modsToRender.length === 0) {
            modGridContainer.innerHTML = '<p class="no-results">Моды не найдены.</p>';
            return;
        }

        modsToRender.forEach(mod => {
            const modCard = document.createElement('div');
            modCard.classList.add('mod-card');
            modCard.dataset.id = mod.id; // Для связи с детальной страницей

            modCard.innerHTML = `
                <img src="${mod.image}" alt="${mod.title}">
                <div class="mod-card-content">
                    <h3>${mod.title}</h3>
                    <p>${mod.description}</p>
                    <div class="mod-card-meta">
                        <span>Версия: ${mod.version}</span>
                        <span>Категория: ${mod.category}</span>
                    </div>
                </div>
            `;
            modGridContainer.appendChild(modCard);

            modCard.addEventListener('click', () => showModDetail(mod.id));
        });
    }

    function showModDetail(modId) {
        const mod = modsData.find(m => m.id === modId);
        if (!mod) return;

        if (modDetailPage && modsGallerySection) {
            modsGallerySection.style.display = 'none'; // Скрываем сетку модов
            modDetailPage.style.display = 'block';    // Показываем детальную страницу

            document.getElementById('mod-detail-title').textContent = mod.title;
            document.getElementById('mod-detail-image').src = mod.image;
            document.getElementById('mod-detail-image').alt = mod.title;
            document.getElementById('mod-detail-version').textContent = mod.version;
            document.getElementById('mod-detail-category').textContent = mod.category;
            document.getElementById('mod-detail-full-description').textContent = mod.fullDescription;

            const downloadBtn = document.getElementById('detail-download');
            downloadBtn.href = mod.downloadLink;
            downloadBtn.download = mod.title.replace(/[^a-z0-9]/gi, '_') + '_' + mod.version + '.jar'; // Динамическое имя файла для скачивания

            const screenshotsContainer = document.getElementById('mod-detail-screenshots');
            screenshotsContainer.innerHTML = ''; // Очищаем старые скриншоты
            mod.screenshots.forEach(screenshotUrl => {
                const img = document.createElement('img');
                img.src = screenshotUrl;
                img.alt = `Скриншот мода ${mod.title}`;
                screenshotsContainer.appendChild(img);
            });
        }
    }

    if (backToModsBtn) {
        backToModsBtn.addEventListener('click', () => {
            if (modDetailPage && modsGallerySection) {
                modsGallerySection.style.display = 'block';
                modDetailPage.style.display = 'none';
            }
        });
    }

    function applyModFilters() {
        const searchTerm = modSearchInput.value.toLowerCase();
        const selectedVersion = modVersionFilter.value;
        const selectedCategory = modCategoryFilter.value;

        currentMods = modsData.filter(mod => {
            const matchesSearch = mod.title.toLowerCase().includes(searchTerm) ||
                                  mod.description.toLowerCase().includes(searchTerm) ||
                                  mod.fullDescription.toLowerCase().includes(searchTerm);

            const matchesVersion = selectedVersion === '' || mod.version === selectedVersion;
            const matchesCategory = selectedCategory === '' || mod.category === selectedCategory;

            return matchesSearch && matchesVersion && matchesCategory;
        });

        renderMods(currentMods);
    }

    if (modSearchInput) {
        modSearchInput.addEventListener('input', applyModFilters);
    }
    if (modVersionFilter) {
        modVersionFilter.addEventListener('change', applyModFilters);
    }
    if (modCategoryFilter) {
        modCategoryFilter.addEventListener('change', applyModFilters);
    }

    // Инициализация: если мы на странице mods.html, отображаем моды
    if (window.location.pathname.includes('mods.html')) {
        renderMods(modsData); // Изначально показываем все моды
    }

    // --- Модуль для Гайдов ---
    const guideGridContainer = document.getElementById('guide-grid-container');
    const guideDetailPage = document.getElementById('guide-detail-page');
    const guidesGallerySection = document.getElementById('guides-gallery-section');
    const backToGuidesBtn = document.getElementById('back-to-guides');

    // Sample Guide Data (имитация данных с сервера)
    const guidesData = [
        {
            id: 'starting-survival',
            title: 'Как начать выживание в Minecraft',
            image: 'https://i.imgur.com/example_guide1.png', // Замените на реальное изображение
            summary: 'Пошаговый гайд для новичков по первым дням в мире Minecraft.',
            fullContent: `
                <h3>День 1: Основы выживания</h3>
                <p>Ваша первая задача - добыть дерево. Найдите ближайшее дерево, удерживайте левую кнопку мыши, чтобы срубить его. Соберите около 10-15 блоков дерева. Откройте инвентарь (клавиша 'E'), перетащите дерево в окно крафта, чтобы получить доски.</p>
                <p>Из досок сделайте верстак (4 доски в квадрате 2x2). Установите верстак на землю и используйте его, чтобы скрафтить деревянные инструменты: кирку, топор, лопату и меч. Кирка нужна для добычи камня, топор - для дерева, лопата - для земли, меч - для защиты.</p>
                <h3>Поиск укрытия</h3>
                <p>До наступления ночи вам нужно найти или построить укрытие. Это может быть небольшая землянка, вырытая в склоне горы, или простая коробка из дерева. Главное - запечатать вход и быть в безопасности от монстров.</p>
                <ul>
                    <li><strong>Убедитесь, что у вас есть:</strong></li>
                    <li>Верстак</li>
                    <li>Деревянные инструменты</li>
                    <li>Небольшое укрытие</li>
                    <li>Пара факелов (крафтятся из угля/древесного угля и палки)</li>
                </ul>
                <h3>Ночь и добыча</h3>
                <p>В первую ночь лучше оставаться в укрытии. Если у вас есть деревянная кирка, начните копать вниз (прямо под собой - не лучший вариант, лучше ступеньками) или в сторону, чтобы найти камень и уголь. Камень позволит вам создать каменные инструменты, которые намного прочнее деревянных. Уголь нужен для факелов и плавки.</p>
                <p>Когда вы найдете уголь, скрафтите факелы (уголь сверху, палка снизу на верстаке). Факелы осветят ваше убежище и предотвратят появление мобов.</p>
                <h3>Дальнейшее развитие</h3>
                <p>После первой ночи вы можете начать расширять свое убежище, исследовать мир, искать еду и новые ресурсы. Помните о важности кровати, чтобы установить точку возрождения и пропускать ночи.</p>
            `
        },
        {
            id: 'getting-diamonds',
            title: 'Как найти алмазы в Minecraft',
            image: 'https://i.imgur.com/example_guide2.png', // Замените на реальное изображение
            summary: 'Подробное руководство по эффективному поиску самых ценных ресурсов.',
            fullContent: `
                <h3>Где искать алмазы?</h3>
                <p>Алмазы в Minecraft наиболее часто встречаются на глубоких уровнях под землей. Наилучшие слои для поиска алмазов: Y-уровень от **-58 до -59** в версии 1.18+ (ниже 0). До версии 1.18 это были слои 11-12.</p>
                <p>Чтобы узнать ваш текущий Y-уровень, нажмите F3 (или Fn+F3 на некоторых ноутбуках) и найдите строку с координатами (X, Y, Z). Вам нужен показатель Y.</p>
                <h3>Подготовка к добыче</h3>
                <ul>
                    <li><strong>Железная кирка или лучше:</strong> Алмазы можно добыть только железной, алмазной или незеритовой киркой.</li>
                    <li><strong>Факелы:</strong> Много факелов для освещения пещер и шахт, предотвращения появления мобов.</li>
                    <li><strong>Еда:</strong> Достаточно еды, чтобы восстанавливать голод.</li>
                    <li><strong>Ведро воды:</strong> Для защиты от лавы и создания обсидиана.</li>
                    <li><strong>Броня:</strong> Защита от мобов.</li>
                    <li><strong>Оружие:</strong> Для борьбы с врагами.</li>
                </ul>
                <h3>Эффективные методы добычи</h3>
                <p>Наиболее популярные и эффективные методы добычи алмазов:</p>
                <ol>
                    <li><strong>Стрип-майнинг (Strip Mining):</strong> Копайте длинные прямые тоннели на оптимальном уровне, оставляя между ними 2-3 блока. Это позволяет охватить большую площадь.</li>
                    <li><strong>Кейв-майнинг (Cave Mining):</strong> Исследование природных пещер. Это более рискованный, но потенциально быстрый способ найти алмазы, так как они часто открыты в стенах пещер. Будьте осторожны с лавой и мобами.</li>
                    <li><strong>Тоннели 2x1:</strong> Копайте тоннели 2 блока в высоту и 1 блок в ширину. Это экономит кирки и время.</li>
                </ol>
                <h3>Советы по безопасности</h3>
                <p>Всегда будьте осторожны с лавой! Алмазы часто встречаются рядом с ней. При попадании в лаву, ведро воды поможет вам быстро выбраться, превратив лаву в обсидиан. Всегда держите факелы под рукой, чтобы избежать появления криперов и других враждебных мобов.</p>
            `
        },
        {
            id: 'nether-survival',
            title: 'Выживание в Нижнем Мире',
            image: 'https://i.imgur.com/example_guide3.png', // Замените на реальное изображение
            summary: 'Руководство по выживанию и исследованию опасного измерения.',
            fullContent: `
                <h3>Вход в Нижний Мир</h3>
                <p>Для входа в Нижний Мир (The Nether) вам понадобится портал. Он строится из минимум 10 блоков обсидиана (рамка 4x5, углы можно пропускать). Активируется портал огнивом, которым нужно кликнуть по одному из внутренних блоков рамки.</p>
                <p><strong>Осторожно!</strong> Точка появления в Нижнем Мире может быть опасной. Сразу после входа установите портал в безопасном месте и подумайте о его защите от гастов.</p>
                <h3>Ресурсы Нижнего Мира</h3>
                <p>В Нижнем Мире можно найти уникальные ресурсы:</p>
                <ul>
                    <li><strong>Незеррак (Netherrack):</strong> Основной блок, легко добывается.</li>
                    <li><strong>Кварцевая руда (Nether Quartz Ore):</strong> Источник кварца для опыта и крафта компараторов.</li>
                    <li><strong>Обломки древности (Ancient Debris):</strong> Редчайший ресурс для создания незеритовых слитков. Добывается только алмазной киркой или лучше, плавится в печи.</li>
                    <li><strong>Магма-блоки (Magma Blocks):</strong> Наносят урон при контакте, но их можно добыть.</li>
                    <li><strong>Базальт (Basalt), Чернит (Blackstone):</strong> Новые блоки для строительства.</li>
                    <li><strong>Души песка (Soul Sand) и Почва душ (Soul Soil):</strong> Замедляющие блоки, на них растут грибы, используются для спавнеров визеров.</li>
                </ul>
                <h3>Опасности Нижнего Мира</h3>
                <p>Нижний Мир полон опасностей:</p>
                <ul>
                    <li><strong>Лава:</strong> Океаны лавы повсюду. Всегда будьте готовы построить мост или использовать ведро воды (если вы вышли из портала в верхнем мире и захватили его с собой).</li>
                    <li><strong>Мобы:</strong> Гасты (стреляют огненными шарами), свинозомби/пиглины (агрессивны, если их атаковать или брать золото), блейзы (летают и стреляют огнем), иссушители-скелеты (накладывают иссушение, дропают черепа для Визера), страйдеры (дружелюбны, по ним можно путешествовать по лаве).</li>
                    <li><strong>Высота:</strong> Падение с высоты часто смертельно.</li>
                </ul>
                <h3>Исследование Крепостей Нижнего Мира</h3>
                <p>Крепости (Nether Fortresses) - это структуры, где можно найти ценные ресурсы и спавнеры блейзов. Вам понадобятся стержни блейза для создания Ока Эндера и порошок блейза для зелий. Остерегайтесь иссушителей-скелетов.</p>
            `
        }
    ];

    function renderGuides(guidesToRender) {
        if (!guideGridContainer) return;
        guideGridContainer.innerHTML = '';

        if (guidesToRender.length === 0) {
            guideGridContainer.innerHTML = '<p class="no-results">Гайды не найдены.</p>';
            return;
        }

        guidesToRender.forEach(guide => {
            const guideCard = document.createElement('div');
            guideCard.classList.add('guide-card');
            guideCard.dataset.id = guide.id;

            guideCard.innerHTML = `
                <img src="${guide.image}" alt="${guide.title}">
                <div class="guide-card-content">
                    <h3>${guide.title}</h3>
                    <p>${guide.summary}</p>
                </div>
            `;
            guideGridContainer.appendChild(guideCard);

            guideCard.addEventListener('click', () => showGuideDetail(guide.id));
        });
    }

    function showGuideDetail(guideId) {
        const guide = guidesData.find(g => g.id === guideId);
        if (!guide) return;

        if (guideDetailPage && guidesGallerySection) {
            guidesGallerySection.style.display = 'none';
            guideDetailPage.style.display = 'block';

            document.getElementById('guide-detail-title').textContent = guide.title;
            document.getElementById('guide-detail-image').src = guide.image;
            document.getElementById('guide-detail-image').alt = guide.title;
            document.getElementById('guide-detail-summary').textContent = guide.summary;
            document.getElementById('guide-detail-full-content').innerHTML = guide.fullContent;
        }
    }

    if (backToGuidesBtn) {
        backToGuidesBtn.addEventListener('click', () => {
            if (guideDetailPage && guidesGallerySection) {
                guidesGallerySection.style.display = 'block';
                guideDetailPage.style.display = 'none';
            }
        });
    }

    // Инициализация: если мы на странице guides.html, отображаем гайды
    if (window.location.pathname.includes('guides.html')) {
        renderGuides(guidesData);
    }

    // --- Модуль для Крафта ---
    const craftGridContainer = document.getElementById('craft-grid-container');
    const craftDetailPage = document.getElementById('craft-detail-page');
    const craftingGallerySection = document.getElementById('crafting-gallery-section');
    const backToCraftsBtn = document.getElementById('back-to-crafts');
    const craftSearchInput = document.getElementById('craft-search');
    const craftCategoryFilter = document.getElementById('craft-category-filter');

    // Sample Crafting Data (имитация данных с сервера)
    const craftingRecipesData = [
        {
            id: 'wooden_pickaxe',
            title: 'Деревянная кирка',
            image: 'https://i.imgur.com/wood_pickaxe.png', // Placeholder
            category: 'Инструменты',
            description: 'Ваш первый инструмент для добычи камня.',
            ingredients: [
                'https://i.imgur.com/oak_planks.png', 'https://i.imgur.com/oak_planks.png', 'https://i.imgur.com/oak_planks.png',
                null, 'https://i.imgur.com/stick.png', null,
                null, 'https://i.imgur.com/stick.png', null
            ]
        },
        {
            id: 'crafting_table',
            title: 'Верстак',
            image: 'https://i.imgur.com/crafting_table.png', // Placeholder
            category: 'Блоки',
            description: 'Основной блок для создания большинства предметов.',
            ingredients: [
                'https://i.imgur.com/oak_planks.png', 'https://i.imgur.com/oak_planks.png', null,
                'https://i.imgur.com/oak_planks.png', 'https://i.imgur.com/oak_planks.png', null,
                null, null, null
            ]
        },
        {
            id: 'furnace',
            title: 'Печь',
            image: 'https://i.imgur.com/furnace.png', // Placeholder
            category: 'Блоки',
            description: 'Используется для переплавки руды и готовки еды.',
            ingredients: [
                'https://i.imgur.com/cobblestone.png', 'https://i.imgur.com/cobblestone.png', 'https://i.imgur.com/cobblestone.png',
                'https://i.imgur.com/cobblestone.png', null, 'https://i.imgur.com/cobblestone.png',
                'https://i.imgur.com/cobblestone.png', 'https://i.imgur.com/cobblestone.png', 'https://i.imgur.com/cobblestone.png'
            ]
        },
        {
            id: 'stone_sword',
            title: 'Каменный меч',
            image: 'https://i.imgur.com/stone_sword.png', // Placeholder
            category: 'Оружие',
            description: 'Улучшенное оружие для защиты от монстров.',
            ingredients: [
                null, 'https://i.imgur.com/cobblestone.png', null,
                null, 'https://i.imgur.com/cobblestone.png', null,
                null, 'https://i.imgur.com/stick.png', null
            ]
        },
        {
            id: 'chest',
            title: 'Сундук',
            image: 'https://i.imgur.com/chest.png', // Placeholder
            category: 'Блоки',
            description: 'Для хранения ваших предметов.',
            ingredients: [
                'https://i.imgur.com/oak_planks.png', 'https://i.imgur.com/oak_planks.png', 'https://i.imgur.com/oak_planks.png',
                'https://i.imgur.com/oak_planks.png', null, 'https://i.imgur.com/oak_planks.png',
                'https://i.imgur.com/oak_planks.png', 'https://i.imgur.com/oak_planks.png', 'https://i.imgur.com/oak_planks.png'
            ]
        },
        {
            id: 'bread',
            title: 'Хлеб',
            image: 'https://i.imgur.com/bread.png', // Placeholder
            category: 'Еда',
            description: 'Простой источник еды для восстановления голода.',
            ingredients: [
                null, null, null,
                'https://i.imgur.com/wheat.png', 'https://i.imgur.com/wheat.png', 'https://i.imgur.com/wheat.png',
                null, null, null
            ]
        }
    ];

    let currentCrafts = [...craftingRecipesData];

    function renderCrafts(craftsToRender) {
        if (!craftGridContainer) return;
        craftGridContainer.innerHTML = '';

        if (craftsToRender.length === 0) {
            craftGridContainer.innerHTML = '<p class="no-results">Рецепты не найдены.</p>';
            return;
        }

        craftsToRender.forEach(craft => {
            const craftCard = document.createElement('div');
            craftCard.classList.add('craft-card');
            craftCard.dataset.id = craft.id;

            craftCard.innerHTML = `
                <img src="${craft.image}" alt="${craft.title}">
                <div class="craft-card-content">
                    <h3>${craft.title}</h3>
                    <p>${craft.description}</p>
                </div>
            `;
            craftGridContainer.appendChild(craftCard);

            craftCard.addEventListener('click', () => showCraftDetail(craft.id));
        });
    }

    function showCraftDetail(craftId) {
        const craft = craftingRecipesData.find(c => c.id === craftId);
        if (!craft) return;

        if (craftDetailPage && craftingGallerySection) {
            craftingGallerySection.style.display = 'none';
            craftDetailPage.style.display = 'block';

            document.getElementById('craft-detail-title').textContent = craft.title;
            document.getElementById('craft-detail-result-image').src = craft.image;
            document.getElementById('craft-detail-result-image').alt = craft.title;
            document.getElementById('craft-detail-category').textContent = craft.category;
            document.getElementById('craft-detail-description').textContent = craft.description;

            const craftingGridElement = document.getElementById('craft-detail-grid');
            craftingGridElement.innerHTML = '';
            for (let i = 0; i < 9; i++) {
                const slot = document.createElement('div');
                slot.classList.add('crafting-slot');
                if (craft.ingredients[i]) {
                    const img = document.createElement('img');
                    img.src = craft.ingredients[i];
                    img.alt = `Ингредиент ${i + 1}`;
                    slot.appendChild(img);
                }
                craftingGridElement.appendChild(slot);
            }
        }
    }

    if (backToCraftsBtn) {
        backToCraftsBtn.addEventListener('click', () => {
            if (craftDetailPage && craftingGallerySection) {
                craftingGallerySection.style.display = 'block';
                craftDetailPage.style.display = 'none';
            }
        });
    }

    function applyCraftFilters() {
        const searchTerm = craftSearchInput.value.toLowerCase();
        const selectedCategory = craftCategoryFilter.value;

        currentCrafts = craftingRecipesData.filter(craft => {
            const matchesSearch = craft.title.toLowerCase().includes(searchTerm) ||
                                  craft.description.toLowerCase().includes(searchTerm);

            const matchesCategory = selectedCategory === '' || craft.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

        renderCrafts(currentCrafts);
    }

    if (craftSearchInput) {
        craftSearchInput.addEventListener('input', applyCraftFilters);
    }
    if (craftCategoryFilter) {
        craftCategoryFilter.addEventListener('change', applyCraftFilters);
    }

    // Инициализация: если мы на странице crafting.html, отображаем рецепты
    if (window.location.pathname.includes('crafting.html')) {
        renderCrafts(craftingRecipesData);
    }

    // --- Модуль для Серверов ---
    const copyIpButtons = document.querySelectorAll('.copy-ip-btn');

    if (copyIpButtons.length > 0) {
        copyIpButtons.forEach(button => {
            button.addEventListener('click', async () => {
                const ipAddress = button.dataset.ip;

                try {
                    await navigator.clipboard.writeText(ipAddress);
                    const originalText = button.textContent;
                    button.textContent = 'IP скопирован!';
                    setTimeout(() => {
                        button.textContent = originalText;
                    }, 2000);
                } catch (err) {
                    console.error('Не удалось скопировать IP:', err);
                    alert('Ошибка при копировании IP. Попробуйте скопировать вручную: ' + ipAddress);
                }
            });
        });
    }
});