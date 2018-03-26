/**
 * Govinfo-link-js
 * <p>The <strong>govinfo</strong> Link Service provides services for developers and webmasters to access content and metadata on <strong>govinfo</strong>. Current and planned services include a link service, list service, and search service. Please contact <a href=\"https://www.gpo.gov/askgpo/\">askGPO</a> for additional information about current or planned services.</p> <p>The link service is used to create embedded links to content and metadata on <strong>govinfo</strong> and is currently enabled for the collections below. The collection code is listed in parenthesis after each collection name, and the available queries are listed below each collection. More information about each query is provided on the individual collection page.</p>
 *
 * OpenAPI spec version: 0.5.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.

    define(['ApiClient'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.

    module.exports = factory(require('../ApiClient'))
  } else {
    // Browser globals (root is window)

    if (!root.govinfoLinkService) {
      root.govinfoLinkService = {
      }
    }
    root.govinfoLinkService.PublicAndPrivateLaws = factory(root.govinfoLinkService.ApiClient)
  }
}(this, (ApiClient) => {
  /**
   * PublicAndPrivateLawsPLAW service.
   * @module api/PublicAndPrivateLaws
   * @version 0.5.0
   */

  /**
   * Constructs a new PublicAndPrivateLaws. 
   * 
   * @alias module:api/PublicAndPrivateLaws
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  const exports = function (apiClient) {
    this.apiClient = apiClient || ApiClient.instance

    /**
     * Callback function to receive the result of the plawBillFetchUsingGET operation.
     * @callback module:api/PublicAndPrivateLaws~plawBillFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: Associated bill number, congress.
     * 
     * @param {number} congress - This is the numerical Congress number. Sample value is 111.
     * @param {string} associatedbillnum - Public and private laws are associated with a primary bill number. The primary bill number is listed at the beginning of the law. Sample value is S. 3397.
     * @param {Object} opts - Optional parameters.
     * @param {module:model/String} opts.linkType - This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.
     * @param {module:api/PublicAndPrivateLaws~plawBillFetchUsingGETCallback} callback The callback function, accepting three arguments: Error, data, response
     * data is of type: {@link Object}.
     */
    this.plawBillFetchUsingGET = function (congress, associatedbillnum, opts, callback) {
      opts = opts || {
      }
      const postBody = null

      // Verify the required parameter 'congress' is set

      if (congress === undefined || congress === null) {
        throw new Error(`Missing the required parameter 'congress' when calling plawBillFetchUsingGET'`)
      }

      // Verify the required parameter 'associatedbillnum' is set

      if (associatedbillnum === undefined || associatedbillnum === null) {
        throw new Error(`Missing the required parameter 'associatedbillnum' when calling plawBillFetchUsingGET'`)
      }

      const pathParams = {
        congress,
        associatedbillnum
      }
      const queryParams = {
        'link-type': opts.linkType
      }
      const collectionQueryParams = {
      }
      const headerParams = {
      }
      const formParams = {
      }

      const authNames = []
      const contentTypes = ['application/json']
      const accepts = ['*/*']
      const returnType = Object

      return this.apiClient.callApi(
        '/plaw/{congress}/{associatedbillnum}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    }

    /**
     * Callback function to receive the result of the plawStatuteFetchUsingGET operation.
     * @callback module:api/PublicAndPrivateLaws~plawStatuteFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: Statutes at Large citation.
     * 
     * @param {string} statutecitation - A Statutes at Large citation is listed at the top of each page of a law. Use a + (plus sign) in place of spaces in the citation. Sample value is 124+stat+2859.
     * @param {Object} opts - Optional parameters.
     * @param {module:model/String} opts.linkType - This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.
     * @param {module:api/PublicAndPrivateLaws~plawStatuteFetchUsingGETCallback} callback The callback function, accepting three arguments: Error, data, response
     * data is of type: {@link Object}.
     */
    this.plawStatuteFetchUsingGET = function (statutecitation, opts, callback) {
      opts = opts || {
      }
      const postBody = null

      // Verify the required parameter 'statutecitation' is set

      if (statutecitation === undefined || statutecitation === null) {
        throw new Error(`Missing the required parameter 'statutecitation' when calling plawStatuteFetchUsingGET'`)
      }

      const pathParams = {
        statutecitation
      }
      const queryParams = {
        'link-type': opts.linkType
      }
      const collectionQueryParams = {
      }
      const headerParams = {
      }
      const formParams = {
      }

      const authNames = []
      const contentTypes = ['application/json']
      const accepts = ['*/*']
      const returnType = Object

      return this.apiClient.callApi(
        '/plaw/{statutecitation}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    }

    /**
     * Callback function to receive the result of the plawTypeFetchUsingGET operation.
     * @callback module:api/PublicAndPrivateLaws~plawTypeFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: Congress, law type, law number.
     * 
     * @param {number} congress - This is the numerical Congress number. Sample value is 111.
     * @param {module:model/String} lawtype - This is the law type. Laws can either be public laws or private laws. Values are public, private.
     * @param {number} lawnum - This is the numerical law number. Laws are numbered consecutively within each law type within a Congress. Sample value is 78.
     * @param {Object} opts - Optional parameters.
     * @param {module:model/String} opts.linkType - This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, related.
     * @param {module:api/PublicAndPrivateLaws~plawTypeFetchUsingGETCallback} callback The callback function, accepting three arguments: Error, data, response
     * data is of type: {@link Object}.
     */
    this.plawTypeFetchUsingGET = function (congress, lawtype, lawnum, opts, callback) {
      opts = opts || {
      }
      const postBody = null

      // Verify the required parameter 'congress' is set

      if (congress === undefined || congress === null) {
        throw new Error(`Missing the required parameter 'congress' when calling plawTypeFetchUsingGET'`)
      }

      // Verify the required parameter 'lawtype' is set

      if (lawtype === undefined || lawtype === null) {
        throw new Error(`Missing the required parameter 'lawtype' when calling plawTypeFetchUsingGET'`)
      }

      // Verify the required parameter 'lawnum' is set

      if (lawnum === undefined || lawnum === null) {
        throw new Error(`Missing the required parameter 'lawnum' when calling plawTypeFetchUsingGET'`)
      }

      const pathParams = {
        congress,
        lawtype,
        lawnum
      }
      const queryParams = {
        'link-type': opts.linkType
      }
      const collectionQueryParams = {
      }
      const headerParams = {
      }
      const formParams = {
      }

      const authNames = []
      const contentTypes = ['application/json']
      const accepts = ['*/*']
      const returnType = Object

      return this.apiClient.callApi(
        '/plaw/{congress}/{lawtype}/{lawnum}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    }
  }

  return exports
}))
