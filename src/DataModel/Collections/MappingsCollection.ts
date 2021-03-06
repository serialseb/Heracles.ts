import { IIriTemplateMapping } from "../IIriTemplateMapping";
import ResourceFilterableCollection from "./ResourceFilterableCollection";

/**
 * Provides a collection of {@link IIriTemplateMapping} that can be filtered with relevant criteria.
 * @class
 */
export default class MappingsCollection extends ResourceFilterableCollection<IIriTemplateMapping> {
  /**
   * Initializes a new instance of the {@link MappingsCollection}
   * class with initial collections of mappings to filter.
   * @param mappings {Iterable<IIriTemplateMapping>} Initial collection of mappings to filter.
   */
  public constructor(mappings: Iterable<IIriTemplateMapping>) {
    super(mappings);
  }

  /**
   * Obtains a collection of mappings for a given variable name.
   * @param {string} variableName Variable name.
   * @returns {IMappingsCollection}
   */
  public ofVariableName(variableName: string): MappingsCollection {
    return this.narrowFiltersWith("variable", variableName) as MappingsCollection;
  }

  /**
   * Obtains a collection of mappings for a given predicate.
   * @param {string} property Predicate IRI.
   * @returns {IMappingsCollection}
   */
  public ofProperty(property: string): MappingsCollection {
    return this.narrowFiltersWith<IIriTemplateMapping>(
      "property",
      value => value.property.iri === property
    ) as MappingsCollection;
  }

  protected createInstance(items: Iterable<IIriTemplateMapping>): MappingsCollection {
    return new MappingsCollection(items);
  }
}
