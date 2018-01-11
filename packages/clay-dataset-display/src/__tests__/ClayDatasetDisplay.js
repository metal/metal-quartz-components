import ClayDatasetDisplay from '../ClayDatasetDisplay';

let component;

const actionItemsWithQuickItems = [
	{
		href: '#1',
		icon: 'trash',
		label: 'Remove',
		quickAction: true,
	},
	{
		href: '#2',
		icon: 'download',
		label: 'Download',
		quickAction: true,
		separator: true,
	},
	{
		href: '#3',
		icon: 'edit',
		label: 'Edit',
	},
];

let items = [
	{
		items: [
			{
				id: '1',
				name: 'Photos',
				type: 'folder',
			},
			{
				id: '2',
				name: 'Videos',
				type: 'folder',
			},
		],
		label: 'Folders',
	},
	{
		items: [
			{
				difficulty: 2,
				downloadHref: '#',
				format: 'PDF',
				id: '3',
				name: 'Hamburger',
				origin: 'U.S.A',
				selected: true,
				spicyLevel: ['No Spicy'],
				time: '10 min.',
			},
			{
				difficulty: 8,
				downloadHref: '#',
				format: 'PDF',
				id: '4',
				image: './ramen.jpg',
				name: 'Ramen',
				origin: 'China',
				spicyLevel: ['Spicy'],
				time: '90 min.',
			},
			{
				difficulty: 9,
				downloadHref: '#',
				format: 'PDF',
				id: '5',
				image: './paella.jpg',
				name: 'Paella',
				origin: 'Spain',
				spicyLevel: ['No Spicy'],
				time: '90 min.',
			},
			{
				difficulty: 6,
				downloadHref: '#',
				format: 'PDF',
				id: '6',
				name: 'Pizza',
				origin: 'Italy',
				spicyLevel: ['No Spicy'],
				time: '30 min.',
			},
			{
				difficulty: 5,
				downloadHref: '#',
				format: 'PDF',
				id: '7',
				image: './carcamusas.jpg',
				name: 'Carcamusas',
				origin: 'Toledo',
				spicyLevel: ['Spicy'],
				time: '50 min.',
			},
			{
				difficulty: 5,
				downloadHref: '#',
				format: 'PDF',
				id: '8',
				name: 'Tacos',
				origin: 'Mexico',
				spicyLevel: ['Very Spicy'],
				time: '30 min.',
			},
		],
		label: 'Recipes',
	},
	{
		items: [
			{
				id: '9',
				initials: 'FA',
				name: 'Ferrán Adriá',
				style: 'fusion',
				type: 'chef',
			},
			{
				id: '10',
				image: './ramsay.jpg',
				initials: 'GR',
				name: 'Gordon Ramsay',
				style: 'general',
				type: 'chef',
			},
			{
				id: '11',
				initials: 'AC',
				name: 'Alberto Chicote',
				style: 'general',
				type: 'chef',
			},
		],
		label: 'Chefs',
	},
];

let spritemap = '../../../node_modules/clay/build/images/icons/icons.svg';

items.forEach(item => {
	item.items.forEach(nestedItem => {
		nestedItem.actionItems = actionItemsWithQuickItems;
	});
});

describe('ClayDatasetDisplay', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayDatasetDisplay({
			actionItems: actionItemsWithQuickItems,
			filterItems: [
				{
					items: [
						{
							label: 'Item 1',
							inputName: 'filteritem1checkbox',
							inputValue: '1',
							type: 'checkbox',
						},
						{
							checked: true,
							label: 'Item 2',
							inputName: 'filteritem2checkbox',
							inputValue: '2',
							type: 'checkbox',
						},
						{
							disabled: true,
							label: 'Item 3',
							inputName: 'filteritem3checkbox',
							inputValue: '3',
							type: 'checkbox',
						},
					],
					label: 'Filter By',
					type: 'group',
				},
				{
					items: [
						{
							label: 'Item 1',
							inputName: 'orderitem1checkbox',
							inputValue: '1',
							type: 'checkbox',
						},
						{
							checked: true,
							label: 'Item 2',
							inputName: 'orderitem2checkbox',
							inputValue: '2',
							type: 'checkbox',
						},
						{
							disabled: true,
							label: 'Item 3',
							inputName: 'orderitem3checkbox',
							inputValue: '3',
							type: 'checkbox',
						},
					],
					label: 'Order By',
					type: 'group',
				},
				{
					items: [
						{
							label: 'Item 1',
							inputValue: '1',
						},
						{
							checked: true,
							label: 'Item 2',
							inputValue: '2',
						},
						{
							disabled: true,
							label: 'Item 3',
							inputValue: '3',
						},
					],
					inputName: 'item1radio',
					label: 'Group 1',
					type: 'radiogroup',
				},
			],
			items: items,
			plusButton: {
				items: [
					{
						href: '#1',
						label: 'Add Content 1',
					},
					{
						href: '#2',
						label: 'Add Content 2',
					},
				],
			},
			selectedView: 2,
			searchActionURL: 'mySearchURL',
			searchFormName: 'mySearchName',
			searchInputName: 'mySearchInputName',
			selectable: true,
			spritemap: spritemap,
			title: 'Group Header 1',
			views: [
				{
					contentRenderer: 'cards',
					icon: 'cards2',
					label: 'Cards',
					schema: {
						contentRendererMap: {
							chef: 'user',
							folder: 'horizontal',
							MKV: 'file',
						},
						fieldsMap: {
							contentRenderer: 'type',
							description: 'origin',
							fileType: 'format',
							href: 'downloadHref',
							icon: 'type',
							imageAlt: 'name',
							imageSrc: 'image',
							initials: 'initials',
							labels: 'spicyLevel',
							title: 'name',
							userColor: 'style',
							username: 'name',
						},
						fileTypeStylesMap: {
							PDF: 'danger',
						},
						iconsMap: {
							'folder': 'folder',
							'*': 'exclamation-circle',
						},
						inputNameField: 'type',
						inputNamesMap: {
							'folder': 'folder',
							'chef': 'chef',
							'*': 'recipe',
						},
						inputValueField: 'id',
						labelStylesMap: {
							'Spicy': 'warning',
							'Very Spicy': 'danger',
							'*': 'success',
						},
						userColorsMap: {
							'fusion': 'danger',
							'*': 'primary',
						},
					},
				},
				{
					contentRenderer: 'list',
					icon: 'list',
					label: 'List',
					schema: {
						fields: [
							{
								contentRenderer: 'icon',
								fieldName: 'type',
								iconsMap: {
									'folder': 'folder',
									'*': 'exclamation-circle',
								},
								iconShapesMap: {
									'folder': 'rounded',
									'*': 'circle',
								},
							},
							{
								contentRenderer: 'content',
								fieldsMap: {
									description: 'origin',
									href: 'downloadHref',
									labels: 'spicyLevel',
									title: 'name',
								},
								labelStylesMap: {
									'Spicy': 'warning',
									'Very Spicy': 'danger',
									'*': 'success',
								},
							},
						],
						inputNameField: 'type',
						inputNamesMap: {
							'folder': 'folder',
							'type': 'chef',
							'*': 'recipe',
						},
						inputValueField: 'id',
					},
				},
				{
					active: true,
					contentRenderer: 'table',
					icon: 'table',
					label: 'Table',
					schema: {
						fields: [
							{
								fieldName: 'name',
								label: 'Name',
								sortable: true,
								sortingOrder: 'asc',
							},
							{
								fieldName: 'origin',
								label: 'Origin',
							},
							{
								contentRenderer: 'number',
								fieldName: 'time',
								label: 'Time',
							},
							{
								contentRenderer: 'label',
								fieldName: 'spicyLevel',
								label: 'SpicyLevel',
								labelStylesMap: {
									'Spicy': 'warning',
									'Very Spicy': 'danger',
									'*': 'success',
								},
							},
							{
								contentRenderer: 'button',
								fieldName: 'downloadHref',
								label: 'Download',
							},
							{
								contentRenderer: 'progressbar',
								fieldName: 'difficulty',
								label: 'Difficulty',
								maxValue: 10,
								minValue: 0,
							},
						],
						inputNameField: 'type',
						inputNamesMap: {
							'folder': 'folder',
							'chef': 'chef',
							'*': 'recipe',
						},
						inputValueField: 'id',
					},
				},
			],
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with classes', () => {
		component = new ClayDatasetDisplay({
			elementClasses: 'my-custom-class',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayDatasetDisplay with id', () => {
		component = new ClayDatasetDisplay({
			id: 'myId',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});
