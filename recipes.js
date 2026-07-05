window.recipes = [
  {
    id: 1,
    name: 'Тестовый рецепт',
    category: 'завтрак',
    histamine_level: 'низкий',
    prep_time: 5,
    servings: 1,
    description: 'Проверка загрузки.',
    ingredients: ['вода'],
    instructions: 'Проверка.',
    tips: '',
    gluten_free: true,
    lactose_free: true,
    dairy_free: true,
    image: ''
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const el = document.getElementById('recipes-indicator');
  if (el) {
    el.textContent = '✅ recipes.js загружен: ' + window.recipes.length;
    el.style.background = '#bbf7d0';
    el.style.color = '#166534';
  }
});
