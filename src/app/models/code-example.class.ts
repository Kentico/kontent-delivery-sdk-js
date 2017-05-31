import { ContentItem, TextField, NumberField, AssetsField, MultipleChoiceField } from '../../../index';

// nested type models
import { Author } from './author.class';
import { Category } from './category.class';

export class CodeExample extends ContentItem {
  
  public title: TextField;
  public author: Author;
  public category: Category;
  public versions: MultipleChoiceField;
}

