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
    root.govinfoLinkService.CongressionalHearings = factory(root.govinfoLinkService.ApiClient)
  }
}(this, (ApiClient) => {
  /**
   * CongressionalHearingsCHRG service.
   * @module api/CongressionalHearings
   * @version 0.5.0
   */

  /**
   * Constructs a new CongressionalHearings. 
   * 
   * @alias module:api/CongressionalHearings
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  const exports = function (apiClient) {
    this.apiClient = apiClient || ApiClient.instance

    /**
     * Callback function to receive the result of the chrgHouseFetchUsingGET operation.
     * @callback module:api/CongressionalHearings~chrgHouseFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: Congress, chamber, committee, house serial number.
     * 
     * @param {number} congress - This is the numerical Congress number. Sample value is 109.
     * @param {string} committee - This is the name of the House committee. Recommend encoding special characters and spaces (%20). Sample value is energy.
     * @param {number} serialnumber - This is the numerical house committee serial number. House hearings are not numbered consecutively across committees within a Congress. For example, 109-138 could exist for both the Energy Committee and the Rules and Administration Committee within the 109th Congress. Sample value is 138.
     * @param {Object} opts - Optional parameters
     * @param {module:model/String} opts.linkType - This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.
     * @param {module:api/CongressionalHearings~chrgHouseFetchUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.chrgHouseFetchUsingGET = function (congress, committee, serialnumber, opts, callback) {
      opts = opts || {
      }
      const postBody = null

      // Verify the required parameter 'congress' is set

      if (congress === undefined || congress === null) {
        throw new Error(`Missing the required parameter 'congress' when calling chrgHouseFetchUsingGET'`)
      }

      // Verify the required parameter 'committee' is set

      if (committee === undefined || committee === null) {
        throw new Error(`Missing the required parameter 'committee' when calling chrgHouseFetchUsingGET'`)
      }

      // Verify the required parameter 'serialnumber' is set

      if (serialnumber === undefined || serialnumber === null) {
        throw new Error(`Missing the required parameter 'serialnumber' when calling chrgHouseFetchUsingGET'`)
      }

      const pathParams = {
        congress,
        committee,
        serialnumber
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
        '/chrg/{congress}/house/{committee}/{serialnumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    }

    /**
     * Callback function to receive the result of the chrgJacketFetchUsingGET operation.
     * @callback module:api/CongressionalHearings~chrgJacketFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: Congress, jacket number.
     * 
     * @param {number} congress - This is the numerical Congress number. Sample value is 105.
     * @param {string} jacketid - This is the GPO jacket number. The jacket number is typically listed on the first page in the lower left corner. Jacket number is unique within a Congress. Sample value is 48-707.
     * @param {Object} opts - Optional parameters.
     * @param {module:model/String} opts.linkType - This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.
     * @param {module:api/CongressionalHearings~chrgJacketFetchUsingGETCallback} callback The callback function, accepting three arguments: Error, data, response
     * data is of type: {@link Object}.
     */
    this.chrgJacketFetchUsingGET = function (congress, jacketid, opts, callback) {
      opts = opts || {
      }
      const postBody = null

      // Verify the required parameter 'congress' is set

      if (congress === undefined || congress === null) {
        throw new Error(`Missing the required parameter 'congress' when calling chrgJacketFetchUsingGET'`)
      }

      // Verify the required parameter 'jacketid' is set

      if (jacketid === undefined || jacketid === null) {
        throw new Error(`Missing the required parameter 'jacketid' when calling chrgJacketFetchUsingGET'`)
      }

      const pathParams = {
        congress,
        jacketid
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
        '/chrg/{congress}/{jacketid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    }

    /**
     * Callback function to receive the result of the chrgSenateFetchUsingGET operation.
     * @callback module:api/CongressionalHearings~chrgSenateFetchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query: Congress, chamber, senate hearing number.
     * 
     * @param {number} congress - This is the numerical Congress number. Sample value is 112.
     * @param {number} hearingnumber - This is the numerical Senate hearing number. Senate hearings are numbered consecutively across committees within a Congress. Sample value is 122.
     * @param {Object} opts - Optional parameters.
     * @param {module:model/String} opts.linkType - This is the format of the returned document. Default is pdf. Other values are html, mods, premis, details, context.
     * @param {module:api/CongressionalHearings~chrgSenateFetchUsingGETCallback} callback The callback function, accepting three arguments: Error, data, response
     * data is of type: {@link Object}.
     */
    this.chrgSenateFetchUsingGET = function (congress, hearingnumber, opts, callback) {
      opts = opts || {
      }
      const postBody = null

      // Verify the required parameter 'congress' is set

      if (congress === undefined || congress === null) {
        throw new Error(`Missing the required parameter 'congress' when calling chrgSenateFetchUsingGET'`)
      }

      // Verify the required parameter 'hearingnumber' is set

      if (hearingnumber === undefined || hearingnumber === null) {
        throw new Error(`Missing the required parameter 'hearingnumber' when calling chrgSenateFetchUsingGET'`)
      }

      const pathParams = {
        congress,
        hearingnumber
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
        '/chrg/{congress}/senate/{hearingnumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      )
    }
  }

  return exports
}))
