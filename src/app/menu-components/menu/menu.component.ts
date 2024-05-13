import { Component } from '@angular/core';
import {MenuComboHeaderComponent} from "../menu-combo-header/menu-combo-header.component";
import {MenuDividerComponent} from "../menu-divider/menu-divider.component";
import {MenuItemSmComponent} from "../menu-item-sm/menu-item-sm.component";
import {MenuItemComponent} from "../menu-item/menu-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuItemComponent,
    MenuDividerComponent,
    MenuComboHeaderComponent,
    MenuItemSmComponent,
    NgForOf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public currency: string = 'kr'

  public hotDrinks = [
    {
      name: 'Classic Espresso',
      price: 25
    },
    {
      name: 'Caffè Latte Small',
      price: 38
    },
    {
      name: 'Caffè Latte Large',
      price: 45
    },
    {
      name: 'Americano',
      price: 30
    },
    {
      name: 'Cappuccino',
      price: 38
    },
    {
      name: 'Flat White',
      price: 38
    },
    {
      name: 'Cortado',
      price: 38
    },
    {
      name: 'Chai Latte',
      price: 45
    },
    {
      name: 'Belgium Hot Chocolate',
      price: 45
    },
    {
      name: 'Tea',
      price: 30
    }
  ]
  public coldDrinks = [
    {
      name: 'Iced Latte',
      price: 38
    },
    {
      name: 'Iced Americano',
      price: 30
    },
    {
      name: 'Bottled Juice (Apple, Elderflower, Rhubarb)',
      price: 40
    },
    {
      name: 'Naturfrisk Soda',
      price: 28
    },
    {
      name: 'Orangina',
      price: 28
    },
    {
      name: 'Cocio',
      price: 28
    },
    {
      name: 'Small Beer',
      price: 40
    },
    {
      name: 'Large Beer',
      price: 50
    }
  ];
  public sides = [
    {
      name: 'Charcuterie',
      price: 40
    },
    {
      name: 'Cheese',
      price: 40
    },
    {
      name: 'Olives',
      price: 30
    },
    {
      name: 'Nuts',
      price: 30
    },
    {
      name: 'Dried Fruit',
      price: 30
    },
    {
      name: 'Olive Oil',
      price: 35
    },
    {
      name: 'Seasoned Whipped Butter',
      price: 15
    }
  ]
  public sandwiches = [
    {
      name: 'Grilled Sourdough Sandwich with Braised Beef',
      description: 'Tender, slow-cooked beef in a crusty sourdough embrace.',
      price: 64
    },
    {
      name: 'Grilled Sourdough Sandwich with Marinated Pulled Chicken',
      description: 'Juicy, marinated chicken, pulled to perfection, nestled in sourdough.',
      price: 64
    },
    {
      name: 'Grilled Sourdough Sandwich with Mushroom Ragout',
      description: 'A rich and earthy mushroom ragout, lovingly layered in grilled sourdough.',
      price: 64
    },
    {
      name: 'Grilled Rye Bread Sandwich with Braised Beef',
      description: 'Hearty rye loaded with succulent braised beef, a rustic delight.',
      price: 54
    },
    {
      name: 'Grilled Rye Bread Sandwich with Marinated Pulled Chicken',
      description: 'Savory pulled chicken, marinated and served in our signature rye bread.',
      price: 54
    },
    {
      name: 'Grilled Rye Bread Sandwich with Mushroom Ragout',
      description: 'Indulge in the deep flavors of our mushroom ragout, wrapped in warm rye.',
      price: 54
    },
    {
      name: 'Croque Monsieur with Smoked Cold Cuts',
      description: 'A classic French favorite with a twist of smoked cold cuts, melted to perfection.',
      price: 64
    }
  ]
  public desserts = [
    {
      name: 'Homemade Carrot Cake',
      description: 'Moist cake studded with walnuts, spiced with a blend of aromatic cinnamon and nutmeg, and finished with a silky cream cheese frosting.',
      price: 45
    },
    {
      name: 'Lemon Meringue Tart',
      description: 'A zesty lemon curd nestled in a crisp tart shell, topped with a cloud of velvety meringue, perfectly balanced between tart and sweet.',
      price: 45
    }
  ]

}
